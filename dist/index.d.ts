import { Yoga } from './entry';
export type { Node, Config, Layout, Value, Size, MeasureFunc, ParsableValue, Align, Direction, Display, Edge, FlexDirection, ExperimentalFeature, FlexWrap, JustifyContent, Overflow, PositionType, Unit, MeasureMode } from './yoga';
export interface YogaWasm extends Yoga {
    init(filepath?: string): Promise<YogaWasm>;
}
declare const mod: YogaWasm;
export default mod;
