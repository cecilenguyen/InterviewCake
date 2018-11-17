/* Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient method that tells us whether or not an input string's openers and closers are properly nested.

Examples:

"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false

*/

function isValid(code) {

  // Determine if the input code is valid
  let stack = [];
  let brackets = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  for (let i = 0; i < code.length; i++) {
    let bracket = code.charAt(i);
    if (!brackets.hasOwnProperty(bracket)) {
      stack.push(bracket);
    } else {
      let lastBracket = stack.pop();
      if (brackets[bracket] !== lastBracket) {
        return false;
      }
    }
  }
 

  return stack.length === 0;
}


















// Tests

let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}