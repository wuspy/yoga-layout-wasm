// @ts-expect-error
import emscripten from '../build/yoga.asm.mjs';
import entry, { YogaInit, Yoga } from './entry';

export type {
    Node,
    Config,
    Layout,
    Value,
    MeasureFunc,
    Align,
    Direction,
    Display,
    Edge,
    FlexDirection,
    ExperimentalFeature,
    FlexWrap,
    JustifyContent,
    Overflow,
    PositionType,
    Unit,
    MeasureMode
} from './yoga';

export interface YogaAsm extends Yoga {
    init(): Promise<YogaAsm>;
}

function init(): Promise<YogaAsm> {
    const task = emscripten().then((raw: YogaInit) => Object.assign(mod, entry(raw)));
    mod.init = () => task;
    return task;
}

const mod = { init } as YogaAsm;

export default mod;
