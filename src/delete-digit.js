const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let initialNumber = String(n).split('');
  let arr = [];
  for (let i = 0; i < initialNumber.length; i++) {
    const curr = Array.from(initialNumber);
    curr.splice(i, 1);
    arr.push(parseInt(curr.join('')))
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
