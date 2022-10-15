const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options) return String(str);
    let arr = [];
    let repeatTimes = options.repeatTimes || 1;
    let separator = String(options.separator) != 'undefined' ? String(options.separator) : '+';
    let addition = String(options.addition) != 'undefined' ? String(options.addition) : '';
    let additionSeparator = String(options.additionSeparator) !== 'undefined' ? String(options.additionSeparator) : '|';
    let additionRepeatTimes = options.additionRepeatTimes || 1;
    
    for (let i = 0; i < repeatTimes; i++) {
        arr.push(String(str));
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] += (String(options.addition) !== 'undefined' ? addition + additionSeparator : '').repeat(additionRepeatTimes);
        
        if (addition) {
            arr[i] = arr[i].slice(0, arr[i].length - additionSeparator.length);
        }
    }
    return arr.join(separator);
}

module.exports = {
  repeater
};
