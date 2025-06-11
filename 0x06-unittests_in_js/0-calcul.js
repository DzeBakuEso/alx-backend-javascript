/**
 * calculateNumber - Rounds a and b, then returns their sum
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} - Sum of rounded a and b
 */
function calculateNumber(a, b) {
  return Math.round(a) + Math.round(b);
}

module.exports = calculateNumber;
