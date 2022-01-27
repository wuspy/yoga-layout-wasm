import { Unit, UNIT_POINT, UNIT_PERCENT, UNIT_AUTO } from "./enums"

export class Value {
    unit: Unit;
    value: number;

    constructor(unit: Unit, value: number) {
        this.unit = unit;
        this.value = value;
    }

    fromJS(expose: (unit: Unit, value: number) => any) {
        expose(this.unit, this.value);
    }

    toString(): string {
        switch (this.unit) {
            case UNIT_POINT:
                return String(this.value);
            case UNIT_PERCENT:
                return `${this.value}%`;
            case UNIT_AUTO:
                return 'auto';
            default: {
                return `${this.value}?`;
            }
        }
    }

    valueOf(): number {
        return this.value;
    }
}
