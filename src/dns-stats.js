const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.');
    for (let j = 0; j < domains[i].length; j++) {
      domains[i][j] = '.' + domains[i][j];
    }
  }

  for (let i = 0; i < domains.length; i++) {
    for (let j = 1; j < domains[i].length; j++) {
      domains[i][domains[i].length - 1 - j] = domains[i][domains[i].length - j] + domains[i][domains[i].length - 1 - j]
    }
  }

  let arr = [];

  for (let i = 0; i < domains.length; i++) {
    for (let j = 0; j < domains[i].length; j++) {
      if (!arr.includes(domains[i][j])) {
        arr.push(domains[i][j]);
      }
    }
  }

  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < domains.length; j++) {
      if (domains[j].includes(arr[i])) {
        count++;
      }
    }
    obj[arr[i]] = count;
  }

  return obj;
}

module.exports = {
  getDNSStats
};
