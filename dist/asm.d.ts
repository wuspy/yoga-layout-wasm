import { Yoga } from './entry';
export type { Node, Config, Layout, Value, MeasureFunc, Align, Direction, Display, Edge, FlexDirection, ExperimentalFeature, FlexWrap, JustifyContent, Overflow, PositionType, Unit, MeasureMode } from './yoga';
export interface YogaAsm extends Yoga {
    init(): Promise<YogaAsm>;
}
declare const mod: YogaAsm;
export default mod;
