const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('summing two integers', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('a whole number and a float', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('adding two floats /w round ups', () => {
    assert.equal(calculateNumber(1.7, 3.7), 6);
  });

  it('adding two floats /w round down', () => {
    assert.equal(calculateNumber(1.3, 3.7), 5);
  });

  it('adding a whole number and float with round down', () => {
    assert.equal(calculateNumber(1, 3.3), 4.0);
  });
});
