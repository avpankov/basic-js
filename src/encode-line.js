const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedStr = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {

    let symbol = str[i];
    if (str[i + 1] == symbol) {
      count++;
    }
    else {
      if (count == 1) {
        encodedStr += symbol;
      } else {
        encodedStr += (count + symbol);
        count = 1;
      }
    }
  }
  return encodedStr
}

module.exports = {
  encodeLine
};
