/**
 *Extends Currency class to implement
 *class Pricing
 */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency object');
    }
    this._currency = value;
  }

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    const fullPriceDisplay = `${this._amount} ${this._currency.displayFullCurrency()}`;
    return fullPriceDisplay;
  }

  static convertPrice(amount, conversionRate) {
    const conversion = amount * conversionRate;
    return conversion;
  }
}
