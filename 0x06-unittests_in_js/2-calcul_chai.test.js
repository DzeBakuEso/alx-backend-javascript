const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 for SUM of 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return 5 for SUM of 1 and 3.7', () => {
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 for SUBTRACT of 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 2 for SUBTRACT of 4.5 and 3.2', () => {
      expect(calculateNumber('SUBTRACT', 4.5, 3.2)).to.equal(2);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 for DIVIDE of 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return 5 for DIVIDE of 4.5 and 1.4', () => {
      expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.equal(5);
    });
  });

  describe('Invalid type', () => {
    it('should return "Invalid operation" for unknown type', () => {
      expect(calculateNumber('MULTIPLY', 1, 1)).to.equal('Invalid operation');
    });
  });
});
