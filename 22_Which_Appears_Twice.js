/* I have an array of n + 1n+1 numbers. Every number in the range 1..n. 
1..n appears once except for one number that appears twice.

Write a method for finding the number that appears twice. */

function findRepeat(numbers) {

  let sum = (numbers.length-1) * (numbers.length) / 2;
  let arrSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    arrSum += numbers[i];
  }

  return arrSum - sum;
}


















// Tests

let desc = 'short array';
let actual = findRepeat([1, 2, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findRepeat([4, 1, 3, 4, 2]);
expected = 4;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findRepeat([1, 5, 9, 7, 2, 6, 3, 8, 2, 4]);
expected = 2;
assertEqual(actual, expected, desc);

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