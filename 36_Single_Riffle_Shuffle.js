/* I suspect the online poker game I'm playing shuffles cards by doing a single riffle. ↴

To prove this, let's write a function to tell us if a full deck of cards shuffledDeck is a single riffle of two other halves half1 and half2.

We'll represent a stack of cards as an array of integers in the range 1..521..52 (since there are 5252 distinct cards in a deck). */

function isSingleRiffle(half1, half2, shuffledDeck) {
  
  if (half1.length + half2.length !== shuffledDeck.length) {
    return false;
  }
  
  let h1 = 0;
  let h2 = 0;
  
  for (let i = 0; i < shuffledDeck.length; i++) {
    if (h1 < half1.length && half1[h1] === shuffledDeck[i]) {
      h1++;
    } else if (h2 < half2.length && half2[h2] === shuffledDeck[i]) {
      h2++;
    } else {
      return false;
    }
  }
  
  return true;
  
}

// run your function through some test cases here
// remember: debugging is half the battle!
let half1 = [3, 4, 8];
let half2 = [1, 5, 7];
let shuffledDeck = [1, 5, 3, 7, 4, 8];
console.log(isSingleRiffle(half1, half2, shuffledDeck));

half1 = [3, 4];
half2 = [1, 5, 7];
shuffledDeck = [1, 5, 3, 7, 4];
console.log(isSingleRiffle(half1, half2, shuffledDeck));

half1 = [2, 4];
half2 = [1, 5, 7];
shuffledDeck = [1, 5, 3, 7, 4];
console.log(isSingleRiffle(half1, half2, shuffledDeck));