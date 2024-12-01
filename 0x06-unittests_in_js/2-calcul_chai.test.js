const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('two integers', () => {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('a whole number and a float', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('two floats /w round ups', () => {
      expect(calculateNumber('SUM', 1.7, 3.7)).to.equal(6);
    });

    it('two floats /w round down', () => {
      expect(calculateNumber('SUM', 1.3, 3.7)).to.equal(5);
    });

    it('a whole number and float with round down', () => {
      expect(calculateNumber('SUM', 1, 3.3)).to.equal(4.0);
    });
  });

  describe('sUBTRACT', () => {
    it('two integers', () => {
      expect(calculateNumber('SUBTRACT', 3, 1)).to.equal(2);
    });

    it('a whole number and a float', () => {
      expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('two floats /w round ups', () => {
      expect(calculateNumber('SUBTRACT', 1.7, 3.7)).to.equal(-2);
    });

    it('two floats /w round down', () => {
      expect(calculateNumber('SUBTRACT', 1.3, 3.7)).to.equal(-3);
    });

    it('a whole number and float with round down', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 3.3)).to.equal(2);
    });
  });

  describe('dIVIDE', () => {
    it('two integers', () => {
      expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
    });

    it('a whole number and a float', () => {
      expect(calculateNumber('DIVIDE', 3, 2.5)).to.equal(1);
    });

    it('two floats /w round ups', () => {
      expect(calculateNumber('DIVIDE', 1.7, 3.7)).to.equal(0.5);
    });

    it('a whole number and zero', () => {
      expect(calculateNumber('DIVIDE', 1, 0.4)).to.equal('Error');
    });
  });
});
