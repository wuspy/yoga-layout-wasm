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
import { Value } from "./Value";
import { Layout } from "./Layout";

export type ParsableValue = number | string | Value | undefined;

export type MeasureFunc = (
    width: number,
    widthMeasureMode: MeasureMode,
    height: number,
    heightMeasureMode: MeasureMode
) => { width?: number, height?: number };

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
    getDisplay(): Display;
    getFlexBasis(): number;
    getFlexDirection(): FlexDirection;
    getFlexGrow(): number;
    getFlexShrink(): number;
    getFlexWrap(): FlexWrap;
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
    setDisplay(display: Display): void;
    setFlex(flex: number): void;
    setFlexBasis(flexBasis: ParsableValue): void;
    setFlexBasisPercent(flexBasis: number): void;
    setFlexDirection(flexDirection: FlexDirection): void;
    setFlexGrow(flexGrow: number): void;
    setFlexShrink(flexShrink: number): void;
    setFlexWrap(flexWrap: FlexWrap): void;
    setHeight(height: ParsableValue): void;
    setHeightAuto(): void;
    setHeightPercent(height: number): void;
    setJustifyContent(justifyContent: JustifyContent): void;
    setMargin(edge: Edge, margin: number): void;
    setMarginAuto(edge: Edge): void;
    setMarginPercent(edge: Edge, margin: number): void;
    setMaxHeight(maxHeight: ParsableValue): void;
    setMaxHeightPercent(maxHeight: number): void;
    setMaxWidth(maxWidth: ParsableValue): void;
    setMaxWidthPercent(maxWidth: number): void;
    setMeasureFunc(measureFunc: MeasureFunc | null | undefined): void;
    setMinHeight(minHeight: ParsableValue): void;
    setMinHeightPercent(minHeight: number): void;
    setMinWidth(minWidth: ParsableValue): void;
    setMinWidthPercent(minWidth: number): void;
    setOverflow(overflow: Overflow): void;
    setPadding(edge: Edge, padding: ParsableValue): void;
    setPaddingPercent(edge: Edge, padding: number): void;
    setPosition(edge: Edge, position: ParsableValue): void;
    setPositionPercent(edge: Edge, position: number): void;
    setPositionType(positionType: PositionType): void;
    setWidth(width: ParsableValue): void;
    setWidthAuto(): void;
    setWidthPercent(width: number): void;
    unsetMeasureFunc(): void;
}