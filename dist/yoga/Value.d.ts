import { Unit } from "./enums";
export declare class Value {
    unit: Unit;
    value: number;
    constructor(unit: Unit, value: number);
    fromJS(expose: (unit: Unit, value: number) => any): void;
    toString(): string;
    valueOf(): number;
}
