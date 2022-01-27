export class Layout {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;

    constructor(
        left: number,
        right: number,
        top: number,
        bottom: number,
        width: number,
        height: number
    ) {
        this.left = left;
        this.right = right;
        this.top = top;
        this.bottom = bottom;
        this.width = width;
        this.height = height;
    }

    fromJS(expose: (
        left: number,
        right: number,
        top: number,
        bottom: number,
        width: number,
        height: number
    ) => any) {
        expose(
            this.left,
            this.right,
            this.top,
            this.bottom,
            this.width,
            this.height,
        );
    }

    toString(): string {
        return `<Layout#${this.left}:${this.right};${this.top}:${this.bottom};${this.width}:${this.height}>`;
    }
}