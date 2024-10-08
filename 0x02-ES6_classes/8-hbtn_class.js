/**
 * Implement class HolbertonClass
 * with customized representation when cast to number and string
 */

export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](type) {
    if (type === 'number') {
      return this._size;
    } if (type === 'string') {
      return this._location;
    }
    return this;
  }
}
