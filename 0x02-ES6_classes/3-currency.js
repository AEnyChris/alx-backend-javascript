/**
 * Implements a class named Currency
 */

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  set code(value) {
    this._code = value;
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  displayFullCurrency() {
    const fullDisplay = `${this._name} (${this._code})`;
    return fullDisplay;
  }
}
