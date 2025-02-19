import {
    Align,
    Direction,
    Display,
    Edge,
    FlexWrap,
    FlexDirection,
    JustifyContent,
    Overflow,
    PositionType,
    MeasureMode
} from "./enums";
import { Config } from "./Config";

export type Value = number | string | undefined;

export interface Layout {
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
}

export type MeasureFunc = (
    width: number,
    widthMeasureMode: MeasureMode,
    height: number,
    heightMeasureMode: MeasureMode,
) => {
    width: number,
    height: number,
};

export declare class Node {
    static create(config?: Config): Node;
    static createDefault(): Node;
    static createWithConfig(config: Config): Node;
    static destroy(node: Node): any;

    calculateLayout(width?: number, height?: number, direction?: Direction): void;
    copyStyle(node: Node): void;
    free(): void;
    freeRecursive(): void;
    getAlignContent(): Align;
    getAlignItems(): Align;
    getAlignSelf(): Align;
    getAspectRatio(): number;
    getBorder(edge: Edge): number;
    getChild(index: number): Node;
    getChildCount(): number;
    getComputedBorder(edge: Edge): number;
    getComputedBottom(): number;
    getComputedHeight(): number;
    getComputedLayout(): Layout;
    getComputedLeft(): number;
    getComputedMargin(edge: Edge): number;
    getComputedPadding(edge: Edge): number;
    getComputedRight(): number;
    getComputedTop(): number;
    getComputedWidth(): number;
    getDirection(): Direction;
    getDisplay(): Display;
    getFlexBasis(): Value;
    getFlexDirection(): FlexDirection;
    getFlexGrow(): number;
    getFlexShrink(): number;
    getFlexWrap(): FlexWrap;
    getHasNewLayout(): boolean;
    getHeight(): Value;
    getJustifyContent(): JustifyContent;
    getMargin(edge: Edge): Value;
    getMaxHeight(): Value;
    getMaxWidth(): Value;
    getMinHeight(): Value;
    getMinWidth(): Value;
    getOverflow(): Overflow;
    getPadding(edge: Edge): Value;
    getParent(): Node | undefined;
    getPosition(edge: Edge): Value;
    getPositionType(): PositionType;
    getWidth(): Value;
    insertChild(child: Node, index: number): void;
    isDirty(): boolean;
    markDirty(): void;
    removeChild(child: Node): void;
    reset(): void;
    setAlignContent(alignContent: Align): void;
    setAlignItems(alignItems: Align): void;
    setAlignSelf(alignSelf: Align): void;
    setAspectRatio(aspectRatio: number): void;
    setBorder(edge: Edge, borderWidth: number): void;
    setDirection(direction: Direction): void;
    setDirtiedFunc(dirtiedFunc: (() => void) | null | undefined): void;
    setDisplay(display: Display): void;
    setFlex(flex: number): void;
    setFlexBasis(flexBasis: Value): void;
    setFlexBasisAuto(): void;
    setFlexBasisPercent(flexBasis: number): void;
    setFlexDirection(flexDirection: FlexDirection): void;
    setFlexGrow(flexGrow: number): void;
    setFlexShrink(flexShrink: number): void;
    setFlexWrap(flexWrap: FlexWrap): void;
    setHasNewLayout(hasNewLayout: boolean): void;
    setHeight(height: Value): void;
    setHeightAuto(): void;
    setHeightPercent(height: number): void;
    setJustifyContent(justifyContent: JustifyContent): void;
    setMargin(edge: Edge, margin: Value): void;
    setMarginAuto(edge: Edge): void;
    setMarginPercent(edge: Edge, margin: number): void;
    setMaxHeight(maxHeight: Value): void;
    setMaxHeightPercent(maxHeight: number): void;
    setMaxWidth(maxWidth: Value): void;
    setMaxWidthPercent(maxWidth: number): void;
    setMeasureFunc(measureFunc: MeasureFunc | null | undefined): void;
    setMinHeight(minHeight: Value): void;
    setMinHeightPercent(minHeight: number): void;
    setMinWidth(minWidth: Value): void;
    setMinWidthPercent(minWidth: number): void;
    setOverflow(overflow: Overflow): void;
    setPadding(edge: Edge, padding: Value): void;
    setPaddingPercent(edge: Edge, padding: number): void;
    setPosition(edge: Edge, position: Value): void;
    setPositionPercent(edge: Edge, position: number): void;
    setPositionType(positionType: PositionType): void;
    setWidth(width: Value): void;
    setWidthAuto(): void;
    setWidthPercent(width: number): void;
    unsetDirtiedFunc(): void;
    unsetMeasureFunc(): void;
}