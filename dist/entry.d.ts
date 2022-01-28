import * as yoga from "./yoga";
export declare type Yoga = typeof yoga;
interface MeasureCallback {
    implement(arg: {
        measure: yoga.MeasureFunc;
    }): any;
}
interface DirtiedCallback {
    implement(arg: {
        dirtied: () => void;
    }): any;
}
export interface YogaInit {
    Node: typeof yoga.Node;
    Config: typeof yoga.Config;
    MeasureCallback: MeasureCallback;
    DirtiedCallback: DirtiedCallback;
}
declare const _default: (lib: YogaInit) => Yoga;
export default _default;
