export declare class Layout {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
    constructor(left: number, right: number, top: number, bottom: number, width: number, height: number);
    fromJS(expose: (left: number, right: number, top: number, bottom: number, width: number, height: number) => any): void;
    toString(): string;
}
