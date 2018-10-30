/* We have our lists of orders sorted numerically already, in arrays. Write a method to merge our arrays of orders into one sorted array.

For example:

  int[] myArray = new int[]{3, 4, 6, 10, 11, 15};
int[] alicesArray = new int[]{1, 5, 8, 12, 14, 19};

System.out.println(Arrays.toString(mergeArrays(myArray, alicesArray)));
// prints [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19] 
*/

function mergeSortedArrays(arr1, arr2) {

  let merged = [];
  
  let i = 0;
  let j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  
  if (i >= arr1.length && j < arr2.length) {
    addRestOfArr(arr2, j, merged);
  } else if (j >= arr2.length && i < arr1.length) {
    addRestOfArr(arr1, i, merged);
  }
  
  return merged;
}

function addRestOfArr(arr, startIndex, mergedArr) {
  for (let i = startIndex; i < arr.length; i++) {
    mergedArr.push(arr[i]);
  }
}



// Tests

let desc = 'same length array';
let actual = mergeSortedArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]);
let expected = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'different length arrays';
actual = mergeSortedArrays([1, 4, 5, 5, 6], [2, 3, 4]);
expected = [1, 2, 3, 4, 4, 5, 5, 6];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'one empty array, one filled array';
actual = mergeSortedArrays([1, 2, 3, 4], []);
expected = [1, 2, 3, 4];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

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