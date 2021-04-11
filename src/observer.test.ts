import Observer from './observer'

interface Prop {
  'inc': { value: number },
  'dev': { val: number }
}

export interface IProp extends Prop {
  [leu: string]: unknown
}

export class TestClass<T extends Prop> extends Observer<T & Prop> {
  private _value = 1
  constructor () {
    super()
  }
  inc () : void {
    this._value++
    this.fire('inc', {
      value: this._value
    })
  }
  dec () : void {
    this._value--
    this.fire('dev', {
      val: this._value
    })
  }
}
