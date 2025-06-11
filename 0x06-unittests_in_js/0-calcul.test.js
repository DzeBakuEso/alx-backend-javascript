const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 for (1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 for (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 for (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should return -4 for (-1.4, -2.5)', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.5), -4);
  });

  it('should return 0 for (0, 0)', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle edge case of 0.4 + 0.4 (should round both down to 0)', () => {
    assert.strictEqual(calculateNumber(0.4, 0.4), 0);
  });

  it('should handle edge case of 0.5 + 0.5 (should round both up to 1)', () => {
    assert.strictEqual(calculateNumber(0.5, 0.5), 2);
  });
});
