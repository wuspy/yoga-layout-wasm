export declare class Size {
    static fromJS({ width, height }: {
        width: number;
        height: number;
    }): Size;
    width: number;
    height: number;
    constructor(width: number, height: number);
    fromJS(expose: (width: number, height: number) => any): void;
    toString(): string;
}
