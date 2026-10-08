function reverseString(value) {
  if (typeof value !== "string") {
    throw new TypeError("value must be a string");
  }

  return Array.from(value).reverse().join("");
}

function countCharacters(value) {
  if (typeof value !== "string") {
    throw new TypeError("value must be a string");
  }

  return Array.from(value).length;
}

function capitalizeWords(sentence) {
  if (typeof sentence !== "string") {
    throw new TypeError("sentence must be a string");
  }

  return sentence.replace(/(^|\s)\S/gu, (wordStart) => wordStart.toUpperCase());
}

function checkNumberArray(values) {
  if (!Array.isArray(values)) {
    throw new TypeError("values must be an array");
  }
  for (const value of values) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
      throw new TypeError("values must contain only finite numbers");
    }
  }
}

function findMaximum(values) {
  checkNumberArray(values);
  if (values.length === 0) {
    throw new RangeError("cannot find the maximum of an empty array");
  }

  let maximum = values[0];
  for (const value of values) {
    if (value > maximum) {
      maximum = value;
    }
  }
  return maximum;
}

function findMinimum(values) {
  checkNumberArray(values);
  if (values.length === 0) {
    throw new RangeError("cannot find the minimum of an empty array");
  }

  let minimum = values[0];
  for (const value of values) {
    if (value < minimum) {
      minimum = value;
    }
  }
  return minimum;
}

function sumArray(values) {
  checkNumberArray(values);
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum;
}

function filterArray(values, condition) {
  if (!Array.isArray(values)) {
    throw new TypeError("values must be an array");
  }
  if (typeof condition !== "function") {
    throw new TypeError("condition must be a function");
  }

  return values.filter(condition);
}

function factorial(number) {
  if (!Number.isSafeInteger(number) || number < 0) {
    throw new RangeError("number must be a non-negative safe integer");
  }

  let result = 1;
  for (let i = 1; i <= number; i += 1) {
    result *= i;
    if (!Number.isSafeInteger(result)) {
      throw new RangeError(
        "factorial result exceeds JavaScript's safe integer range",
      );
    }
  }

  return result;
}

function isPrime(number) {
  if (!Number.isSafeInteger(number) || number < 2) {
    return false;
  }

  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

function fibonacciSequence(terms) {
  if (!Number.isSafeInteger(terms) || terms < 0) {
    throw new RangeError("terms must be a non-negative safe integer");
  }

  const sequence = [];
  let first = 0;
  let second = 1;

  for (let i = 0; i < terms; i += 1) {
    if (!Number.isSafeInteger(first)) {
      throw new RangeError("sequence exceeds JavaScript's safe integer range");
    }
    sequence.push(first);
    const next = first + second;
    first = second;
    second = next;
  }

  return sequence;
}

module.exports = {
  reverseString,
  countCharacters,
  capitalizeWords,
  findMaximum,
  findMinimum,
  sumArray,
  filterArray,
  factorial,
  isPrime,
  fibonacciSequence,
};
