export class Size {
    static fromJS({ width, height }: { width: number, height: number }) {
        return new Size(width, height);
    }

    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    fromJS(expose: (width: number, height: number) => any) {
        expose(this.width, this.height);
    }

    toString(): string {
        return `<Size#${this.width}x${this.height}>`;
    }
}