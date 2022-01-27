// @ts-expect-error
import emscripten from '../build/yoga.mjs';
import entry, { YogaInit, Yoga } from './entry';

export type {
    Node,
    Config,
    Layout,
    Value,
    Size,
    MeasureFunc,
    ParsableValue,
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

export interface YogaWasm extends Yoga {
    init(filepath?: string): Promise<YogaWasm>;
}

function initConfig(filepath?: string): (() => string) | undefined {
  return filepath
    ? function locateFile() {
        return filepath;
    }
    : void 0;
}

function init(filepath?: string): Promise<YogaWasm> {
    const task = emscripten({ locateFile: initConfig(filepath) }).then(
        (raw: YogaInit) => Object.assign(mod, entry(raw))
    );
    mod.init = () => task;
    return task;
}

const mod = { init } as YogaWasm;

export default mod;
