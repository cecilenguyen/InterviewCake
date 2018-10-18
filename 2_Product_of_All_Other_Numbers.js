/* You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

Write a method getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given: [1, 7, 3, 4] 
your method would return: [84, 12, 28, 21]
by calculating: [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Here's the catch: You can't use division in your solution! */

function getProductsOfAllIntsExceptAtIndex(intArray) {

  if (intArray.length <= 1) {
    new IllegalArgumentException("Getting all products except at index requires at least 1 number");
  }
  // Make a list of the products
  let productsBefore = new Array(intArray.length).fill(0);
  let products = new Array(intArray.length).fill(0);
  let productsSoFar = 1;
  
  for (let i = 0; i < intArray.length; i++) {
    productsBefore[i] = productsSoFar;
    productsSoFar *= intArray[i];
  }
  
  productsSoFar = 1;
  for (let i = intArray.length-1; i >= 0; i--) {
    products[i] = productsSoFar * productsBefore[i];
    productsSoFar *= intArray[i];
  }
  console.log(products);
  
  return products;

}


















// Tests

let desc = 'short array';
let actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
let expected = [6, 3, 2];
assertArrayEquals(actual, expected, desc);

desc = 'longer array',
actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
expected = [120, 480, 240, 320, 960, 192];
assertArrayEquals(actual, expected, desc);

desc = 'array has one zero',
actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
expected = [0, 0, 36, 0];
assertArrayEquals(actual, expected, desc);

desc = 'array has two zeros';
actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
expected = [0, 0, 0, 0, 0];
assertArrayEquals(actual, expected, desc);

desc = 'one negative number';
actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
expected = [32, -12, -24];
assertArrayEquals(actual, expected, desc);

desc = 'all negative numbers';
actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
expected = [-8, -56, -14, -28];
assertArrayEquals(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (getProductsOfAllIntsExceptAtIndex([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (getProductsOfAllIntsExceptAtIndex([1]));
assertThrowsError(oneNumber, desc);

function assertArrayEquals(a, b, desc) {
  const arrayA = JSON.stringify(a);
  const arrayB = JSON.stringify(b);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
  } else {
    console.log(`${desc} ... PASS`);
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