function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      return "Error: Cannot divide by zero";
    }
    return a / b;
  },
};

function shiftLetter(letter, key) {
  // prettier-ignore
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ];

  if (!alphabet.includes(letter.toLowerCase())) return letter;

  key = ((key % 26) + 26) % 26;
  const isUpper = letter === letter.toUpperCase();

  let shiftedIndex = alphabet.indexOf(letter.toLowerCase()) + key;
  if (shiftedIndex > 25) shiftedIndex -= 26;

  const shiftedLetter = alphabet[shiftedIndex];
  return isUpper ? shiftedLetter.toUpperCase() : shiftedLetter;
}

function caesarCipher(str, key) {
  return str
    .split("")
    .map((char) => shiftLetter(char, key))
    .join("");
}
/*
function caesarCipher(str, key) {
  const arr = str.split("");
  const arrShifted = [];

  for (let i = 0; i < arr.length; i++) {
    arrShifted.push(shiftLetter(arr[i], key));
  }

  return arrShifted.join("");
}
*/

function analyzeArray(arr) {
  arr.sort((a, b) => a - b);
  const reducedArr = arr.reduce((a, b) => a + b, 0);

  const object = {
    average: reducedArr / arr.length,
    min: arr[0],
    max: arr[arr.length - 1],
    length: arr.length,
  };

  return object;
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
