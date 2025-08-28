const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./script.js");

// -------------- Reverse String
test("Capitalize", () => {
  expect(capitalize("audi")).toBe("Audi");
});

test("capitalizes first letter of all lowercase string", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("keeps already capitalized word unchanged", () => {
  expect(capitalize("Apple")).toBe("Apple");
});

// Edge cases
test("capitalizes single character", () => {
  expect(capitalize("a")).toBe("A");
});

test("handles empty string", () => {
  expect(capitalize("")).toBe("");
});

// -------------- Reverse String
test("Reverse string", () => {
  expect(reverseString("Hello")).toBe("olleH");
});

test("reverses string with spaces", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverses single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("reverses empty string", () => {
  expect(reverseString("")).toBe("");
});

// -------------- Calculator

test("calculator add 5 + 3", () => {
  expect(calculator.add(5, 3)).toBe(8);
});

test("calculator subtract 10 - 4", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("calculator multiply 6 * 7", () => {
  expect(calculator.multiply(6, 7)).toBe(42);
});

test("calculator divide 20 / 5", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});

test("calculator divide by zero", () => {
  expect(calculator.divide(10, 0)).toBe("Error: Cannot divide by zero");
});

// -------------- Caesar Cipher

test("Caesar Cipher basic", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("Caesar Cipher with wrap around", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Caesar Cipher with basic Upper Case shift", () => {
  expect(caesarCipher("Hello", 1)).toBe("Ifmmp");
});

test("Caesar Cipher preserves non-alphabetic characters", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

// Edge Cases
test("Caesar Cipher with zero shift", () => {
  expect(caesarCipher("Hello", 0)).toBe("Hello");
});

test("Caesar Cipher with large shift", () => {
  expect(caesarCipher("abc", 26)).toBe("abc"); // Full alphabet wrap
});

test("Caesar Cipher with key 27 (wraps to key 1)", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
});

test("Caesar Cipher with key 52 (wraps to key 0)", () => {
  expect(caesarCipher("Hello", 52)).toBe("Hello"); // 52 % 26 = 0
});

test("Caesar Cipher with key 29 (wraps to key 3)", () => {
  expect(caesarCipher("xyz", 29)).toBe("abc"); // 29 % 26 = 3
});

test("Caesar Cipher with negative key", () => {
  expect(caesarCipher("def", -1)).toBe("cde"); // Shift backwards
});

test("Caesar Cipher with negative key", () => {
  expect(caesarCipher("a", -1)).toBe("z"); // Shift backwards
});

// -------------- Analyze Array

test("Analyze Array basic", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("Analyze Array with single element", () => {
  expect(analyzeArray([5])).toEqual({ average: 5, min: 5, max: 5, length: 1 });
});

test("Analyze Array with negative numbers", () => {
  expect(analyzeArray([-1, -5, 3])).toEqual({ average: -1, min: -5, max: 3, length: 3 });
});

test("Analyze Array with decimals", () => {
  expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({ average: 2.5, min: 1.5, max: 3.5, length: 3 });
});
