const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('two integers', () => {
      assert.equal(calculateNumber('SUM', 1, 3), 4);
    });

    it('a whole number and a float', () => {
      assert.equal(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('two floats /w round ups', () => {
      assert.equal(calculateNumber('SUM', 1.7, 3.7), 6);
    });

    it('two floats /w round down', () => {
      assert.equal(calculateNumber('SUM', 1.3, 3.7), 5);
    });

    it('a whole number and float with round down', () => {
      assert.equal(calculateNumber('SUM', 1, 3.3), 4.0);
    });
  });

  describe('sUBTRACT', () => {
    it('two integers', () => {
      assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
    });

    it('a whole number and a float', () => {
      assert.equal(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('two floats /w round ups', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.7, 3.7), -2);
    });

    it('two floats /w round down', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.3, 3.7), -3);
    });

    it('a whole number and float with round down', () => {
      assert.equal(calculateNumber('SUBTRACT', 4.5, 3.3), 2);
    });
  });

  describe('dIVIDE', () => {
    it('two integers', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 2), 1.5);
    });

    it('a whole number and a float', () => {
      assert.equal(calculateNumber('DIVIDE', 3, 2.5), 1);
    });

    it('two floats /w round ups', () => {
      assert.equal(calculateNumber('DIVIDE', 1.7, 3.7), 0.5);
    });

    it('a whole number and zero', () => {
      assert.equal(calculateNumber('DIVIDE', 1, 0.4), 'Error');
    });
  });
});
