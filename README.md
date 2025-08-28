# Testing Practice

A JavaScript testing practice project demonstrating Test-Driven Development (TDD) using Jest. This project implements various utility functions with comprehensive test coverage to practice writing and testing JavaScript code.

## Overview

This project includes five core utility functions, each with extensive test suites covering normal cases, edge cases, and error handling:

- **capitalize** - Capitalizes the first letter of a string
- **reverseString** - Reverses a string
- **calculator** - Basic arithmetic operations with error handling
- **caesarCipher** - Encrypts text using Caesar cipher algorithm
- **analyzeArray** - Analyzes arrays and returns statistical information

## Features

- ✅ **Comprehensive Test Coverage** - 25+ test cases covering all scenarios
- ✅ **Edge Case Handling** - Tests for empty strings, single characters, negative numbers
- ✅ **Error Handling** - Proper error messages and boundary validation
- ✅ **Jest Testing Framework** - Modern testing with clear assertions
- ✅ **Modular Design** - Clean function exports and imports

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd Testing-Practice

# Install dependencies
npm install

# Run tests
npm test
```

## Functions Documentation

### `capitalize(str)`

Capitalizes the first letter of a string while preserving the rest.

```javascript
capitalize("hello world"); // "Hello world"
capitalize("audi"); // "Audi"
capitalize("Apple"); // "Apple"
capitalize("a"); // "A"
capitalize(""); // ""
```

**Parameters:**

- `str` - String to capitalize

**Returns:** String with first letter capitalized

---

### `reverseString(str)`

Reverses the order of characters in a string.

```javascript
reverseString("Hello"); // "olleH"
reverseString("hello world"); // "dlrow olleh"
reverseString("a"); // "a"
reverseString(""); // ""
```

**Parameters:**

- `str` - String to reverse

**Returns:** Reversed string

---

### `calculator`

Object containing basic arithmetic operations with division by zero protection.

```javascript
calculator.add(5, 3); // 8
calculator.subtract(10, 4); // 6
calculator.multiply(6, 7); // 42
calculator.divide(20, 5); // 4
calculator.divide(10, 0); // "Error: Cannot divide by zero"
```

**Methods:**

- `add(a, b)` - Addition
- `subtract(a, b)` - Subtraction
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division with zero check

---

### `caesarCipher(str, key)`

Encrypts text using the Caesar cipher algorithm with wrap-around and case preservation.

```javascript
caesarCipher("abc", 3); // "def"
caesarCipher("xyz", 3); // "abc" (wrap around)
caesarCipher("Hello", 1); // "Ifmmp"
caesarCipher("Hello, World!", 3); // "Khoor, Zruog!"
caesarCipher("abc", 26); // "abc" (full wrap)
caesarCipher("def", -1); // "cde" (negative shift)
```

**Parameters:**

- `str` - String to encrypt
- `key` - Shift amount (can be positive, negative, or > 26)

**Returns:** Encrypted string

**Features:**

- Preserves case (uppercase/lowercase)
- Handles wrap-around (z → a)
- Preserves non-alphabetic characters
- Supports negative keys
- Normalizes keys > 26

---

### `analyzeArray(arr)`

Analyzes an array of numbers and returns statistical information.

```javascript
analyzeArray([1, 8, 3, 4, 2, 6]);
// { average: 4, min: 1, max: 8, length: 6 }

analyzeArray([5]);
// { average: 5, min: 5, max: 5, length: 1 }

analyzeArray([-1, -5, 3]);
// { average: -1, min: -5, max: 3, length: 3 }
```

**Parameters:**

- `arr` - Array of numbers to analyze

**Returns:** Object with properties:

- `average` - Mean of all numbers
- `min` - Smallest number
- `max` - Largest number
- `length` - Array length

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test script.test.js

# Run tests with coverage
npm test -- --coverage
```

## Test Coverage

The project includes comprehensive test coverage:

### Capitalize Tests (5 tests)

- Basic capitalization
- Already capitalized strings
- Single character
- Empty string
- Multiple words

### Reverse String Tests (4 tests)

- Basic reversal
- Strings with spaces
- Single character
- Empty string

### Calculator Tests (5 tests)

- Addition, subtraction, multiplication, division
- Division by zero error handling

### Caesar Cipher Tests (10 tests)

- Basic encryption
- Wrap-around cases
- Case preservation
- Non-alphabetic character preservation
- Zero shift
- Large shifts (26, 27, 52)
- Negative shifts

### Analyze Array Tests (4 tests)

- Basic array analysis
- Single element arrays
- Negative numbers
- Decimal numbers

## Project Structure

```
Testing-Practice/
├── script.js          # Main functions
├── script.test.js     # Jest test suites
├── package.json       # Dependencies and scripts
└── README.md          # This file
```

## Key Testing Concepts Demonstrated

- **Unit Testing** - Testing individual functions in isolation
- **Edge Cases** - Testing boundary conditions and unusual inputs
- **Error Handling** - Testing error conditions and proper error messages
- **Test Organization** - Grouping related tests with descriptive names
- **Assertions** - Using appropriate Jest matchers (`.toBe()`, `.toEqual()`)

## Dependencies

- **Jest** - JavaScript testing framework
- **Node.js** - Runtime environment

## Scripts

```json
{
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

## License

MIT License
