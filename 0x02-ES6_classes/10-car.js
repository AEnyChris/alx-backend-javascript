/**
 * Implements a class Car
 */

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar(brand, motor, color) {
    return new this.constructor(brand, motor, color);
  }
}
