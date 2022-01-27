import * as yoga from "./yoga";
export type Yoga = typeof yoga;

interface MeasureCallback {
    implement(arg: { measure: yoga.MeasureFunc }): any;
}

export interface YogaInit {
    Node: typeof yoga.Node;
    Config: typeof yoga.Config;
    MeasureCallback: MeasureCallback;
}

export default ({ Config, Node, MeasureCallback }: YogaInit): Yoga => {
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

        Node.prototype[fnName] = function (...args: [yoga.Edge, yoga.ParsableValue] | [yoga.ParsableValue]) {
            // We patch all these functions to add support for the following calls:
            // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

            let value: yoga.ParsableValue = args.pop();
            let unit: yoga.Unit, asNumber: number | undefined;

            if (value === 'auto') {
                unit = yoga.UNIT_AUTO;
                asNumber = undefined;
            } else if (value instanceof yoga.Value) {
                unit = value.unit;
                asNumber = value.valueOf();
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

            // @ts-expect-error
            if (!methods[unit]) {
                throw new Error(`Failed to execute "${fnName}": Unsupported unit '${value}'`);
            }

            if (asNumber !== undefined) {
                // @ts-expect-error
                return methods[unit].call(this, ...args, asNumber);
            } else {
                // @ts-expect-error
                return methods[unit].call(this, ...args);
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

    Config.prototype.free = function () {
        // Since we handle the memory allocation ourselves (via lib.Config.create),
        // we also need to handle the deallocation
        Config.destroy(this);
    };

    const super_setMeasureFunc = Node.prototype.setMeasureFunc;

    Node.prototype.setMeasureFunc = function(measureFunc) {
        if (measureFunc) {
            return super_setMeasureFunc.call(this, MeasureCallback.implement({
                measure: (...args) => yoga.Size.fromJS(measureFunc(...args) as any)
            }));
        } else {
            return this.unsetMeasureFunc();
        }
    };

    const super_calculateLayout = Node.prototype.calculateLayout;

    Node.prototype.calculateLayout = function (
        width = NaN,
        height = NaN,
        direction: yoga.Direction = yoga.DIRECTION_LTR,
    ) {
        // Just a small patch to add support for the function default parameters
        return super_calculateLayout.call(this, width, height, direction);
    };

    return { ...yoga, Config, Node };
};
