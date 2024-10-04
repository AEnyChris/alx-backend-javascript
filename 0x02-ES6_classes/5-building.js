/**
 * Implements an abstract class named Building
 * Instances must override the method evacuationWarningMessage
 */

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
    if (this.constructor !== Building) {
      if (!this.evacuationWarningMessage) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  get sqft() {
    return this._sqft;
  }
}
