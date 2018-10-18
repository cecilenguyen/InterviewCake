/*Suppose we had an array ↴ of nn integers sorted in ascending order. How quickly could we check if a given integer is in the array?*/

function contains(array, value) {
  
  let start = 0;
  let end = array.length - 1;
  
  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    let pivot = array[middle];
    
    if (pivot === value) {
      return true;
    }
    
    if (value < pivot) {
      end = pivot - 1;
    } else {
      start = pivot + 1;
    }
  }
  
  return array[Math.floor((start + end) / 2)] === value;
}



// Tests

let desc = 'empty array';
let actual = contains([], 1);
let expected = false;
assertEquals(actual, expected, desc);

desc = 'one item array, number present';
actual = contains([1], 1);
expected = true;
assertEquals(actual, expected, desc);

desc = 'one item array, number absent';
actual = contains([1], 2);
expected = false;
assertEquals(actual, expected, desc);

desc = 'small array, number present';
actual = contains([2, 4, 6], 4);
expected = true;
assertEquals(actual, expected, desc);

desc = 'small array, number absent';
actual = contains([2, 4, 6], 5);
expected = false;
assertEquals(actual, expected, desc);

desc = 'large array, number present';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8);
expected = true;
assertEquals(actual, expected, desc);

desc = 'large array, number absent';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0);
expected = false;
assertEquals(actual, expected, desc);

desc = 'large array, number first';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
expected = true;
assertEquals(actual, expected, desc);

desc = 'large array, number last';
actual = contains([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10);
expected = true;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}