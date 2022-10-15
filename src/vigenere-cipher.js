const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(mod) {
      this.mod = mod;
  }
  encrypt(message, key) {
      if (!message || !key) {
          throw new Error('Incorrect arguments!');
      }

      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      message = message.toUpperCase();
      key = key.toUpperCase();

      while (key.length < message.length) {
          key += key;
      }

      if (key.length > message.length) {
          key = key.slice(0, message.length);
      }

      let encryptedMessage = '';
      let count = 0;
      for (let i = 0; i < message.length; i++) {
          if (alphabet.includes(message[i])) {
              let encryptedLetter = message.charCodeAt(i) + key.charCodeAt(count) - 65;
              if (encryptedLetter > 90) {
                  encryptedLetter -= 26;
              }
              encryptedMessage += String.fromCharCode(encryptedLetter);
              count++;
          }
          else {
              encryptedMessage += message[i];
          }
      }

      if (this.mod || this.mod === undefined) {
          return encryptedMessage;
      } else {
          return encryptedMessage.split('').reverse().join('');
      }
  }
  decrypt(message, key) {
      if (!message || !key) {
          throw new Error('Incorrect arguments!');
      }

      let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

      message = message.toUpperCase();
      key = key.toUpperCase();

      while (key.length < message.length) {
          key += key;
      }

      if (key.length > message.length) {
          key = key.slice(0, message.length);
      }

      let decryptedMessage = '';
      let count = 0;

      for (let i = 0; i < message.length; i++) {
          if (alphabet.includes(message[i])) {
              let decryptedLetter = message.charCodeAt(i) - key.charCodeAt(count) + 65;
              if (decryptedLetter < 65) {
                  decryptedLetter += 26;
              }
              decryptedMessage += String.fromCharCode(decryptedLetter);
              count++;
          }
          else {
              decryptedMessage += message[i];
          }
      }
      if (this.mod || this.mod === undefined) {
          return decryptedMessage;
      } else {
          return decryptedMessage.split('').reverse().join('');
      }
  }
}

module.exports = {
  VigenereCipheringMachine
};
