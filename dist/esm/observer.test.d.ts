import Observer from './observer';
interface Prop {
    'inc': {
        value: number;
    };
    'dev': {
        val: number;
    };
}
export interface IProp extends Prop {
    [leu: string]: unknown;
}
export declare class TestClass<T extends Prop> extends Observer<T & Prop> {
    private _value;
    constructor();
    inc(): void;
    dec(): void;
}
export {};
