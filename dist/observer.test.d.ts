import Observer from './observer';
declare type Prop = {
    'inc': {
        value: number;
    };
    'dev': {
        val: number;
    };
};
export interface IProp extends Prop {
    [leu: string]: unknown;
}
export declare class TestClass<T extends IProp> extends Observer<T> {
    private _value;
    constructor();
    inc(): void;
    dec(): void;
}
export {};
