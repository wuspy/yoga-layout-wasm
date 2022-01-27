import * as yoga from "./yoga";
export declare type Yoga = typeof yoga;
interface MeasureCallback {
    implement(arg: {
        measure: yoga.MeasureFunc;
    }): any;
}
export interface YogaInit {
    Node: typeof yoga.Node;
    Config: typeof yoga.Config;
    MeasureCallback: MeasureCallback;
}
declare const _default: ({ Config, Node, MeasureCallback }: YogaInit) => Yoga;
export default _default;
