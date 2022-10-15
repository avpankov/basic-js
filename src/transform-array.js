const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

    let result = [];

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--discard-prev':
          if (arr[i - 1] !== '') {
            result.pop();
            result.push('');
          }
          break;
        case '--discard-next':
          result.push('');
          i++;
          break;
        case '--double-prev':
          if (result.length && result[result.length - 1] !== '') {
            result.push(result[result.length - 1]);
          }
          break;
        case '--double-next':
          if (arr[i + 1]) {
            result.push(arr[i + 1]);
          }
          break;
        default:
          result.push(arr[i]);
          break;
      }
    }
    
    return result.filter(el => el !== '');
}

module.exports = {
  transform
};
