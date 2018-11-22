/* Given an array of integers, find the highest product you can get from three of the integers. */

function highestProductOf3(arrayOfInts) {
  if (arrayOfInts.length < 3) {
    throw new Error('Must have at least 3 integers in array')
  }
  
  let max = Number.MIN_SAFE_INTEGER;
  let secMax = Number.MIN_SAFE_INTEGER;
  let thirdMax = Number.MIN_SAFE_INTEGER;
  let min = Number.MAX_SAFE_INTEGER;
  let secMin = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arrayOfInts.length; i++) {
    let num = arrayOfInts[i];
    
    if (num > max) {
      thirdMax = secMax;
      secMax = max;
      max = num;
    } else if (num > secMax) {
      thirdMax = secMax;
      secMax = num;
    } else if (num > thirdMax) {
      thirdMax = num;
    }
    
    if (num < min) {
      secMin = min;
      min = num;
    } else if (num < secMin) {
      secMin = num;
    }
    
  }
  
  return Math.max(max * secMax * thirdMax, max * min * secMin);
}










// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(emptyArray, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}