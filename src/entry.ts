import * as yoga from "./yoga";
export type Yoga = typeof yoga;

interface MeasureCallback {
    implement(arg: { measure: yoga.MeasureFunc }): any;
}

interface DirtiedCallback {
    implement(arg: { dirtied: () => void }): any;
}

interface YGValue {
    unit: {
        value: yoga.Unit;
    };
    value: number;
};

export interface YogaInit {
    Node: typeof yoga.Node;
    Config: typeof yoga.Config;
    MeasureCallback: MeasureCallback;
    DirtiedCallback: DirtiedCallback;
}

const patchConfig = ({ Config }: YogaInit): typeof yoga.Config => {
    Config.prototype.free = function () {
        // Since we handle the memory allocation ourselves (via lib.Config.create),
        // we also need to handle the deallocation
        Config.destroy(this);
    };
    return Config;
}

const patchNode = ({ Node, MeasureCallback, DirtiedCallback }: YogaInit): typeof yoga.Node => {
    const _super = {
        setMeasureFunc: Node.prototype.setMeasureFunc,
        setDirtiedFunc: Node.prototype.setDirtiedFunc,
        calculateLayout: Node.prototype.calculateLayout,
    };
    
    for (const fnName of [
        'setPosition',
        'setMargin',
        'setFlexBasis',
        'setWidth',
        'setHeight',
        'setMinWidth',
        'setMinHeight',
        'setMaxWidth',
        'setMaxHeight',
        'setPadding',
    ] as const) {
        const methods = {
            [yoga.UNIT_POINT]: Node.prototype[fnName],
            [yoga.UNIT_PERCENT]: Node.prototype[`${fnName}Percent`],
            // @ts-expect-error
            [yoga.UNIT_AUTO]: Node.prototype[`${fnName}Auto`],
        };

        Node.prototype[fnName] = function (...args: [yoga.Edge, yoga.Value] | [yoga.Value]) {
            // We patch all these functions to add support for the following calls:
            // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

            let value: yoga.Value = args.pop();
            let unit: yoga.Unit, asNumber: number | undefined;

            if (value === 'auto') {
                unit = yoga.UNIT_AUTO;
                asNumber = undefined;
            } else if (value === undefined) {
                unit = yoga.UNIT_POINT;
                asNumber = NaN;
            } else {
                unit =
                    typeof value === 'string' && value.endsWith('%')
                        ? yoga.UNIT_PERCENT
                        : yoga.UNIT_POINT;
                asNumber = parseFloat(value as string);
                if (!Number.isNaN(value) && Number.isNaN(asNumber)) {
                    throw new Error(`Invalid value ${value} for ${fnName}`);
                }
            }

            if (!methods[unit]) {
                throw new Error(`Failed to execute "${fnName}": Unsupported unit '${value}'`);
            }

            if (asNumber !== undefined) {
                return methods[unit].call(this, ...args, asNumber);
            } else {
                return methods[unit].call(this, ...args);
            }
        }
    }

    for (const fnName of [
        'getPosition',
        'getMargin',
        'getFlexBasis',
        'getWidth',
        'getHeight',
        'getMinWidth',
        'getMinHeight',
        'getMaxWidth',
        'getMaxHeight',
        'getPadding',
    ] as const) {
        const _super = Node.prototype[fnName];
        Node.prototype[fnName] = function (...args: any[]) {
            // Patched to convert YGValue to simpler types
            // @ts-expect-error
            const value = _super.call(this, ...args) as any as YGValue;
            switch (value.unit.value) {
                case yoga.UNIT_AUTO:
                    return 'auto';
                case yoga.UNIT_PERCENT:
                    return `${value.value}%`;
                case yoga.UNIT_POINT:
                    return value.value;
                default:
                    return undefined;
            }
        }
    }

    Node.create = function (config?: yoga.Config) {
        // We decide the constructor we want to call depending on the parameters
        return config
            ? Node.createWithConfig(config)
            : Node.createDefault();
    };

    Node.prototype.free = function () {
        // Since we handle the memory allocation ourselves (via lib.Node.create),
        // we also need to handle the deallocation
        Node.destroy(this);
    };

    Node.prototype.freeRecursive = function () {
        for (let t = 0, T = this.getChildCount(); t < T; ++t) {
            this.getChild(0).freeRecursive();
        }
        this.free();
    };

    Node.prototype.setMeasureFunc = function (measureFunc) {
        if (measureFunc) {
            return _super.setMeasureFunc.call(this, MeasureCallback.implement({
                measure: measureFunc
            }));
        } else {
            return this.unsetMeasureFunc();
        }
    };

    Node.prototype.setDirtiedFunc = function (dirtiedFunc) {
        if (dirtiedFunc) {
            return _super.setDirtiedFunc.call(this, DirtiedCallback.implement({
                dirtied: dirtiedFunc
            }));
        } else {
            return this.unsetDirtiedFunc();
        }
    };

    Node.prototype.calculateLayout = function (
        width = NaN,
        height = NaN,
        direction: yoga.Direction = yoga.DIRECTION_LTR,
    ) {
        // Just a small patch to add support for the function default parameters
        return _super.calculateLayout.call(this, width, height, direction);
    };

    return Node;
}

export default (lib: YogaInit): Yoga => ({
    ...yoga,
    Config: patchConfig(lib),
    Node: patchNode(lib),
});
