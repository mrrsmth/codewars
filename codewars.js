const startStr = 'the-stealth-warrior';
const toCamelCase = (str) => {
  const strArr = str.split('');
  const resultArr = [];

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == '-' || strArr[i] == '_') {
      strArr[i + 1] = strArr[i + 1].toUpperCase();
    }
  }

  strArr.forEach((item) => {
    if (item != '-' && item != '_') {
      resultArr.push(item);
    }
  });

  return resultArr.join('');
};

console.log(toCamelCase(startStr));

// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

const startNum = 152;
// const degreeArr = [];
// let sum = 0;
// let newNum = String(startNum).split('').map(Number);
// const degree = newNum.length;

// newNum.forEach(item => {
//   degreeArr.push(Math.pow(item, degree))
// })

// degreeArr.forEach(item => {
//   sum = sum + item;
// })

// function narcissistic(value) {
//   const degreeArr = [];
//   let sum = 0;
//   let newNum = String(value).split('').map(Number);
//   const degree = newNum.length;

//   newNum.forEach(item => {
//     degreeArr.push(Math.pow(item, degree))
//   });

//   degreeArr.forEach(item => {
//     sum = sum + item;
//   });

//   if(value === sum) {
//     return true;
//   }
//     return false;
// }

// console.log(narcissistic(startNum));

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digitalRoot(n) {
  // ...
}

// const fullNum = 132189;
// let sumNumber = 0;
// let testArr = [];
// let newNum = String(fullNum).split('').map(Number);
// console.log(newNum);

// if (newNum.length != 1) {
//   newNum.forEach((item) => {
//     sumNumber = sumNumber + item;
//   });
// }
// if(sumNumber > 9) {
//   newNum = String(sumNumber).split('').map(Number);
//   newNum.forEach((item) => {
//     sumNumber = sumNumber + item;
//   });
// }
// console.log(newNum);

// for(let i = 0;)

let sumNumber = 132189;
let nNum = [];
while (sumNumber > 9) {
  let nNum = String(sumNumber).split('').map(Number);
  const initialValue = 0;
  const sumWithInitial = nNum.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  sumNumber = sumWithInitial;
  console.log(sumNumber);
}

const digitalRoot = (n) => {
  while (n > 9) {
    let nArr = String(n).split('').map(Number);
    const initialValue = 0;
    const sumWithInitial = nArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
    n = sumWithInitial;
  }
  return n;
};
console.log(digitalRoot(132189));

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const assert = require('chai').assert;

describe('Example tests', function () {
  function doTest(a, n) {
    assert.strictEqual(findOdd(a), n, `Incorrect answer for input=[${a}]`);
  }

  it('Example tests', () => {
    doTest([7], 7);
    doTest([0], 0);
    doTest([1, 1, 2], 2);
    doTest([0, 1, 0, 1, 0], 0);
    doTest([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1], 4);
  });

  it('Fixed tests', () => {
    doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
    doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
    doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
    doTest([10], 10);
    doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
    doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);
  });
});

function findOdd(A) {
  //happy coding!
  return 0;
}

// Дан массив целых чисел, найдите то, которое встречается нечетное количество раз.

// Всегда будет только одно целое число, которое встречается нечетное количество раз.

// Примеры
// [7]должен вернуть 7, потому что это происходит 1 раз (что нечетно).
// [0]должен вернуть 0, потому что это происходит 1 раз (что нечетно).
// [1,1,2]должен вернуть 2, потому что это происходит 1 раз (что нечетно).
// [0,1,0,1,0]должен вернуть 0, потому что он встречается 3 раза (что нечетно).
// [1,2,2,3,3,3,4,3,3,3,2,2,1]должен вернуть 4, потому что он появляется 1 раз (что нечетно).

const randomNumArr = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
const resArr = [];

for (let i = 0; i < randomNumArr.length; i++) {
  resArr.push(item);
}

// const numbers = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]; // исходный массив

const countItems = {}; // здесь будет храниться промежуточный результат

// получаем объект в котором ключ - это элемент массива, а значение - сколько раз встречается элемент в списке
// например так будет выглядеть этот объект после цикла:
// {1: 1, 3: 2, 4: 2, 7: 1, 15: 1, 19: 2}
// 1 встречается в тексте 1 раз, 2 встречается 2 раза, 4 встречается 2 раза и так далее
for (const item of numbers) {
  // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
  countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
}
// console.log(countItems);

for (let key in countItems) {
  // if(countItems.hasOwnProperty(key)){
  //   console.log(`${key} : ${countItems[key]}`)
  // }
  if (countItems[key] % 2 != 0) {
    console.log(key);
  }
}
const numbers = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
const findOdd = (A) => {
  const countItems = {};
  for (const item of A) {
    countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  }
  console.log(countItems);
  for (let key in countItems) {
    if (countItems[key] % 2 != 0) {
      return Number(key);
    }
  }
};
console.log(findOdd(numbers));

const myObject = {
  first: 'one',
  second: 'two',
};

for (const [key, value] of Object.entries(myObject)) {
  if (key != 'first') {
    console.log(key + ': ' + value);
  }
}

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

const likes = (names) => {
  const lengthtArr = names.length;

  if (lengthtArr <= 0) {
    return 'no one likes this';
  } else if (lengthtArr == 1) {
    return `${names[0]} likes this`;
  } else if (lengthtArr == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (lengthtArr == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (lengthtArr >= 4) {
    return `${names[0]}, ${names[1]} and ${lengthtArr - 2} others like this`;
  }
};

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

const findOutlier = (integers) => {
  const oddArr = [];
  const evenArr = [];
  integers.forEach((item) => {
    if (item % 2 != 0) {
      evenArr.push(item);
    }
    if (item % 2 == 0) {
      oddArr.push(item);
    }
  });
  if (oddArr.length > 1) {
    return evenArr[0];
  } else {
    return oddArr[0];
  }
};
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

const persistence = (num) => {
  let i = 0;
  while (num.toString().length !== 1) {
    num = num
      .toString()
      .split('')
      .reduce((a, b) => a * b);
    i++;
  }
  return i;
};

// const persistence = (num) => {
//   // let num = 999;

//   // console.log(strNum);
//   let mnojitel;
//   let lenth;
//   arrNum = String(num).split('').map(Number);
//   if (arrNum.length === 1) {
//     return 0;
//   } else {
//     while (num > 9) {
//       let nArr = String(num).split('').map(Number);
//       const res = nArr.reduce((acc, rec) => acc * rec);
//       num = res;
//     }
//     return num;
//   }
// };
// console.log(persistence(999));

// const array = [9, 9, 9];
// const res = array.reduce((acc, rec) => acc * rec);

// console.log(res);

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

// const persistence = (num) => {
//   let arrNum = String(num).split('').map(Number);
//   if (arrNum.length === 1) {
//     return 0;
//   } else {
//     while (num > 9) {
//       num = String(num).split('').map(Number).reduce((acc, rec) => acc * rec);
//     }
//     return num;
//   }
// };
// console.log(persistence(999));

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

const startArr = [0, 0, 0.55, 0, 0];
const deplicate = {};
for (const item of startArr) {
  deplicate[item] = deplicate[item] ? deplicate[item] + 1 : 1;
  // console.log(deplicate[item])
}
console.log(deplicate);
for (let key in deplicate) {
  if (deplicate[key] === 1) {
    console.log(key);
  }
}

const findUniq = (arr) => {
  const deplicate = {};
  for (const item of arr) {
    deplicate[item] = deplicate[item] ? deplicate[item] + 1 : 1;
  }
  for (let key in deplicate) {
    if (deplicate[key] === 1) {
      return key;
    }
  }
};

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

// const braces = '[({})](]';
// const sumArr = [];
// const bracerArr = braces.split('').join('');
// for(let i = 0; i < bracerArr.length; i += 2) {
//   let sum = bracerArr[i] + bracerArr[i + 1]
//     sumArr.push(sum);
// }

// console.log(sumArr);
// sumArr.forEach(item => {
//   if(item === '()' || item === '[]' || item || '{}') {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// })

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

let stringKek = '(){}[]';
const kekArr = stringKek.split('');
const firstKekArr = [];
const secondKekArr = [];
// console.log(kekArr);
// console.log(kekArr.length);
kekArr.forEach((item, index) => {});
console.log(firstKekArr);

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const randomNum = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const oddArr = [];

randomNum.forEach((item) => {
  if (item % 2 != 0) {
    oddArr.push(item);
  }
});

// console.log(oddArr.sort());

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

let zeroNum = String(-1050);
const ttt = [];
let resultNum;
let arrNum = String(zeroNum).split('').map(Number).reverse();
console.log(arrNum);

// for(let i = 0; i < arrNum.length; i++) {
//   if(arrNum[i+1] != undefined) {
//     ttt.push(arrNum[i])
//   }
// }
// // console.log(ttt);
// resultNum = ttt.join('');
// console.log(resultNum);

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  // ...
}

let words = 'is2 Thi1s T4est 3a';
const wordsArray = words.split(' ').map((item) => {
  return [item];
});
console.log(wordsArray);
// wordsArray.forEach((item) => {
//   item.forEach((item) => {
//     console.log(item);
//   });
// });
// разбить подмассивы на отдельные элемены внутри массива, найти 1(если нет, вернуть пустую строку), если есть 1, то поставить в начало нового маасива,
// далее: пройтись по всем массивам и найти все елементы(цифры), проверяя чтобы пред был больше пред в доп массиве на 1.

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

let s = 'world';
let a = s.split('').reverse().join('');
console.log(a);

// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

let noCamelCaseStr = 'hello case';
const semiArr = noCamelCaseStr.split('');
const arr = [];
for (let i = 0; i < semiArr.length; i++) {
  if (semiArr[i] == ' ') {
    semiArr[i + 1] = semiArr[i + 1].toUpperCase();
  }
}
semiArr.forEach((item) => {
  if (item != ' ') {
    arr.push(item);
  }
});
// console.log(arr);
// console.log(arr.join(''));
let newStr = arr.join('')[0].toUpperCase() + arr.join('').slice(1);
console.log(newStr);

const camelCase = (noCamelCaseStr) => {
  const semiArr = noCamelCaseStr.split('');
  const arr = [];
  for (let i = 0; i < semiArr.length; i++) {
    if (semiArr[i] == ' ') {
      semiArr[i + 1] = semiArr[i + 1].toUpperCase();
    }
  }
  semiArr.forEach((item) => {
    if (item != ' ') {
      arr.push(item);
    }
  });

  let newStr = arr.join('')[0].toUpperCase() + arr.join('').slice(1);
  return newStr;
};
console.log(camelCase('hello case'));

// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

const countSmileys = (arr) => {
  let count = 0;
  const arrStr = arr.join(' ');
  for (let i = 0; i < arrStr.length; i++) {
    if (
      (arrStr[i] === ':' && arrStr[i + 1] === ')') ||
      (arrStr[i] == ';' && arrStr[i + 1] == ')') ||
      (arrStr[i] == ':' && arrStr[i + 1] == 'D') ||
      (arrStr[i] == ';' && arrStr[i + 1] == 'D') ||
      (arrStr[i] == ';' && arrStr[i + 1] == '-' && arrStr[i + 2] == 'D') ||
      (arrStr[i] == ':' && arrStr[i + 1] == '-' && arrStr[i + 2] == 'D') ||
      (arrStr[i] == ';' && arrStr[i + 1] == '~' && arrStr[i + 2] == 'D') ||
      (arrStr[i] == ':' && arrStr[i + 1] == '~' && arrStr[i + 2] == 'D') ||
      (arrStr[i] == ';' && arrStr[i + 1] == '-' && arrStr[i + 2] == ')') ||
      (arrStr[i] == ':' && arrStr[i + 1] == '-' && arrStr[i + 2] == ')') ||
      (arrStr[i] == ';' && arrStr[i + 1] == '~' && arrStr[i + 2] == 'D') ||
      (arrStr[i] == ':' && arrStr[i + 1] == '~' && arrStr[i + 2] == 'D') ||
      (arrStr[i] == ':' && arrStr[i + 1] == '~' && arrStr[i + 2] == ')') ||
      (arrStr[i] == ';' && arrStr[i + 1] == '~' && arrStr[i + 2] == ')')
    ) {
      count++;
    }
  }
  return count;
};

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.deepEqual(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), [
      'Hello',
      'Hello Again',
    ]);
    assert.deepEqual(
      removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
      [1, 3, 5, 7, 9]
    );
    assert.deepEqual(removeEveryOther([[1, 2]]), [[1, 2]]);
    assert.deepEqual(removeEveryOther([['Goodbye'], { Great: 'Job' }]), [
      ['Goodbye'],
    ]);
  });
});

const bobo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const qwwfew = [];
bobo.forEach((item, index) => {
  if (index % 2 === 0) {
    qwwfew.push(item);
  }
});
console.log(qwwfew);

const removeEveryOther = (arr) => {
  const output = [];
  arr.forEach((item, index) => {
    if (index % 2 === 0) {
      output.push(item);
    }
  });
  return output;
};

// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

let size = 5;
let one = '10';
let output = '';

for (let i = 0; i < size; i++) {
  output += one;
}

// if(size === 1) {
//   output = one;
// }
console.log(output);
const stringy = (size) => {
  let one = '10';
  let output = '';
  for (let i = 0; i < size; i++) {
    output += one;
  }
  return output;
};

// Given two strings, the first being a random string and the second being the same as the first, but with three added characters somewhere in the string (three same characters),

// Write a function that returns the added character

// E.g
// string1 = "hello"
// string2 = "aaahello"

// // => 'a'
// The above is just an example; the characters could be anywhere in the string and string2 is actually shuffled.

// Another example
// string1 = "abcde"
// string2 = "2db2a2ec"

// // => '2'
// Note that the added character could also exist in the original string

// string1 = "aabbcc"
// string2 = "aacccbbcc"

// // => 'c'
// You can assume that string2 will aways be larger than string1, and there will always be three added characters in string2.

// Write the function addedChar() that takes two strings and return the added character as described above.

function addedChar(s1, s2) {
  let charMap = {};

  for (let char of text) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
}

// let s1 = 'abcde';
// let s2 = '2db2a2ec';
// const filter = [];
// const s1Arr = s2.split('');
// console.log(s1Arr);
// s1Arr.forEach((item) => {});

// let text = 'checlclo';
// let charMap = {};

// for (let char of text) {
//   if (charMap.hasOwnProperty(char)) {
//     charMap[char]++;
//     if (charMap[char] === 3) {
//       console.log(char);
//     }
//   } else {
//     charMap[char] = 1;
//   }
//   // console.log(charMap[char]);
// }

//сперва все одинаковые буквы убрать, потом найти 3 и ебануть ихв ответ
let s1 = 'abcde';
let s2 = '2db2a2ec';
function addedChar(s1, s2) {
  let charMap = {};
  for (let char of s2) {
    if (charMap.hasOwnProperty(char)) {
      charMap[char]++;
      if (charMap[char] === 3) {
        return char;
      }
    } else {
      charMap[char] = 1;
    }
  }
}
console.log(addedChar(s1, s2));

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    assert.strictEqual(
      findShort('bitcoin take over the world maybe who knows perhaps'),
      3
    );
    assert.strictEqual(
      findShort(
        'turns out random test cases are easier than writing out basic ones'
      ),
      3
    );
    assert.strictEqual(findShort("Let's travel abroad shall we"), 2);
  });
});

const whereShort = 'bitcoin take over the world maybe who knows perhaps';
const qwe = whereShort.split(' ');
// console.log(qwe);
const qwer = qwe.map((item) => {
  return item.length;
});
// console.log(qwer);
const resultQwe = Math.min(...qwer);
console.log(resultQwe);

const findShort = (s) => {
  const arr = s.split(' ');
  const arrNew = arr.map((item) => {
    return item.length;
  });
  const result = Math.min(...arrNew);
  return result;
};
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

describe('Basic tests', () => {
  it('Should pass Basic tests', () => {
    assert.deepEqual(arrayDiff([1, 2], [1]), [2], 'a was [1,2], b was [1]');
    assert.deepEqual(
      arrayDiff([1, 2, 2], [1]),
      [2, 2],
      'a was [1,2,2], b was [1]'
    );
    assert.deepEqual(
      arrayDiff([1, 2, 2], [2]),
      [1],
      'a was [1,2,2], b was [2]'
    );
    assert.deepEqual(
      arrayDiff([1, 2, 2], []),
      [1, 2, 2],
      'a was [1,2,2], b was []'
    );
    assert.deepEqual(arrayDiff([], [1, 2]), [], 'a was [], b was [1,2]');
    assert.deepEqual(
      arrayDiff([1, 2, 3], [1, 2]),
      [3],
      'a was [1,2,3], b was [1,2]'
    );
  });
});

// const arrayDiff = (a, b) => {
//   if(b.length === 0) {
//     return a;
//   } else {
//     const resultArr = [];
//     for (let i = 0; i < a.length; i++) {
//       for (let j = 0; j < b.length; j++) {
//         if (a[i] != b[j]) {
//           resultArr.push(a[i]);
//         }
//       }
//     }
//     return resultArr;
//   }
// }
// console.log(arrayDiff([1, 2], [0]));

// const arrayDiff = (a, b) => {
//   if(b.length === 0) {
//     return a;
//   } else {
//     const resultArr = [];
//     for (let i = 0; i < a.length; i++) {
//       for (let j = 0; j < b.length; j++) {
//         if (a[i] != b[j]) {
//           resultArr.push(a[i]);
//         }
//       }
//     }
//     return resultArr;
//   }
// }
// console.log(arrayDiff([1, 2, 3, 3], [1,2,3]));

const aArr = [1, 2];
const bArr = [1];
const resultArr = [];

// for (let i = 0; i < aArr.length; i++) {
//   for (let j = 0; j < bArr.length; j++) {
//     if (aArr[i] != bArr[j]) {
//       resultArr.push(aArr[i]);
//     }
//   }
// }
// aArr.forEach(item => {
//   bArr.forEach(item => {
//     console.log(bArr[item])
//   })
// })
for (let i = 0; i < aArr.length; i++) {
  for (let j = 0; j < bArr.length; j++) {
    if (aArr[i] != bArr[j]) {
      resultArr.push(aArr[i]);
    }
  }
}
console.log(resultArr);

const arrayDiff = (a, b) => {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(a[i]);
    }
  }
  return result;
};

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!

describe('Create Phone Number', () => {
  it('Fixed tests', () => {
    assert.strictEqual(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      '(123) 456-7890'
    );
    assert.strictEqual(
      createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      '(111) 111-1111'
    );
    assert.strictEqual(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      '(123) 456-7890'
    );
  });
});

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// => returns "(123) 456-7890"
const firstBlock = [];

firstBlock.push(numArr[0], numArr[1], numArr[2]);
// firstBlock.push(')');
// firstBlock.shift('(');
// console.log(firstBlock.join(''));
const firstBlockStr = `(${firstBlock.join('')})`;
console.log(firstBlockStr);
const secondBlock = [];
secondBlock.push(numArr[3], numArr[4], numArr[5]);
// console.log(secondBlock);
const secondBlockStr = ` ${secondBlock.join('')}-`;
console.log(secondBlockStr);
const trheeBlock = [];
trheeBlock.push(numArr[6], numArr[7], numArr[8], numArr[9]);
const trheeBlockStr = `${trheeBlock.join('')}`;
console.log(trheeBlockStr);
const resultBlock = firstBlockStr + secondBlockStr + trheeBlockStr;
console.log(resultBlock);

const createPhoneNumber = (numbers) => {
  const firstBlock = [];
  const secondBlock = [];
  const trheeBlock = [];

  firstBlock.push(numbers[0], numbers[1], numbers[2]);
  const firstBlockStr = `(${firstBlock.join('')})`;
  secondBlock.push(numbers[3], numbers[4], numbers[5]);
  const secondBlockStr = ` ${secondBlock.join('')}-`;
  trheeBlock.push(numbers[6], numbers[7], numbers[8], numbers[9]);
  const trheeBlockStr = `${trheeBlock.join('')}`;
  const resultBlock = firstBlockStr + secondBlockStr + trheeBlockStr;
  return resultBlock;
};

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  return;
}

// const zeroArr = [false, 1, 0, 1, 2, 0, 1, 3, 'a'];
// let count = 0;
// let keke = zeroArr.filter((item) => item !== 0);

// let kekeQq = zeroArr.filter((item) => item == 0);

// const firstZero = keke.join(' ').split(' ');
// // console.log(kekeQq.join(' ').replace(/false/g, '').split(' '));
// console.log(firstZero);
// const halfZero = kekeQq.join(' ').replace(/false/g, '').split(' ');
// // console.log(realZero);
// const secondZero = [];
// halfZero.forEach((item) => {
//   if(item != '') {
//     secondZero.push(item);
//   }
// })
// console.log(secondZero);

// const resultZero = firstZero.concat(secondZero);
// console.log(resultZero);
const moveZeros = (arr) => {
  let zeros = [];
  let nonZeros = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      nonZeros.push(arr[i]);
    }
  }

  return nonZeros.concat(zeros);
};

const zeroArr = [false, 1, 0, 1, 2, 0, 1, 3, 'a'];
console.log(moveZeros(zeroArr));

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

const pigIt = (str) => {
  const single = 'ay';
  const strArr = str.split(' ');

  const srtArrArr = strArr.map((item) => {
    return [item];
  });

  const buba = [];
  srtArrArr.forEach((item) => {
    item.forEach((item) => {
      buba.push(item.split(''));
    });
  });

  const res = buba
    .map((subArr) => {
      const firstLetter = subArr.shift();
      subArr.push(firstLetter);
      return subArr.join('');
    })
    .flat();

  const resAy = res.map((item) => {
    if (item === '!' || item === '?') {
      return item;
    } else {
      return item + single;
    }
  });
  return resAy.join(' ');
};
console.log(pigIt('uisQay ustodietcay psosiay ustodescay ?ay'));

const str = 'Hello world !';
const single = 'ay';
const strArr = str.split(' ');
// console.log(strArr);
const srtArrArr = strArr.map((item) => {
  return [item];
});
// console.log(srtArrArr);
const buba = [];
srtArrArr.forEach((item) => {
  item.forEach((item) => {
    buba.push(item.split(''));
  });
});
console.log(buba);
// buba.forEach(item => {
//   item.forEach(item => {
//     console.log(item);
//   });
// })
const res = buba
  .map((subArr) => {
    const firstLetter = subArr.shift();
    subArr.push(firstLetter);
    return subArr.join('');
  })
  .flat();

console.log(res); // ['igP', 'atinl', 'sis', 'oolc']
// const resAy = [];
const resAy = res.map((item) => {
  if (item === '!') {
    return item;
  } else {
    return item + single;
  }
});
console.log(resAy.join(' '));
// igPay atinlay siay oolcay
// elloHay orldway !

// let pig = [
//   ['P', 'i', 'g'],
//   ['l', 'a', 't', 'i', 'n'],
//   ['i', 's'],
//   ['c', 'o', 'o', 'l'],
// ];
// console.log(pig[0][0]);

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

const makeNegative = (num) => {
  if (num < 0 || num === 0) {
    return num;
  }
  return num * -1;
};

const summation = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  const result = arr.reduce((reviousValue, currentValue) => {
    return reviousValue + currentValue;
  });
  return result + num;
};

console.log(summation(8));

// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

const spaces = '8 j 8   mBliB8g  imjB8B8  jl  B';
// const spacesArr = spaces.split('');
// const spacesArrNew = [];
// spacesArr.forEach(item => {
//   if(item != ' ') {
//     spacesArrNew.push(item)
//   }
// });
// return spacesArrNew.join();

const noSpace = (x) => {
  const spacesArr = x.split('');
  const spacesArrNew = [];
  spacesArr.forEach((item) => {
    if (item != ' ') {
      spacesArrNew.push(item);
    }
  });
  return spacesArrNew.join('');
};
console.log(noSpace(spaces));

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

const numArrStart = [34, -345, -1, 100];
const bibi = Math.min(...numArrStart);
console.log(bibi);
class SmallestIntegerFinder {
  findSmallestInt(args) {
    const bibi = Math.min(...args);
    return bibi;
  }
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

const countSheeps = (arrayOfSheep) => {
  let count = 0;
  arrayOfSheep.forEach((item) => {
    if (item === true) {
      count++;
    }
  });
  return count;
};
console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
const basicOp = (operation, value1, value2) => {
  if (operation === '+') {
    return value1 + value2;
  } else if (operation === '-') {
    return value1 - value2;
  } else if (operation === '*') {
    return value1 * value2;
  } else if (operation === '/') {
    return value1 / value2;
  }
};
console.log(basicOp('-', 1, 1));

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

describe('basic tests', function () {
  test(10, 23);
});

let fullNum = 10;
let fullNumArr = [];
for (let i = 0; i < fullNum; i++) {
  if (i !== fullNum) {
    fullNumArr.push(i);
  }
}
fullNumArr.push(fullNum);
const boba = [];
fullNumArr.forEach((item) => {
  if (item != fullNum) {
    boba.push(item);
  }
});

const biba = [];
boba.forEach((item) => {
  if (item % 3 === 0) {
    biba.push(item);
  }
  if (item % 5 === 0) {
    biba.push(item);
  }
});

const uniqueBiba = new Set(biba);
console.log(uniqueBiba);
console.log(
  Array.from(uniqueBiba).reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  })
);

// const solution = (number) => {
//   let fullNumArr = [];
//   for (let i = 0; i < number; i++) {
//     if (i !== number) {
//       fullNumArr.push(i);
//     }
//   }
//   fullNumArr.push(number);
//   const boba = [];
//   fullNumArr.forEach((item) => {
//     if (item != number) {
//       boba.push(item);
//     }
//   });

//   const biba = [];
//   boba.forEach((item) => {
//     if (item % 3 === 0) {
//       biba.push(item);
//     }
//     if (item % 5 === 0) {
//       biba.push(item);
//     }
//   });

//   const uniqueBiba = new Set(biba);

//   const final = Array.from(uniqueBiba).reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
//   });
//   return final;
// };
// console.log(solution(10));

const solution = (number) => {
  if (number < 0) {
    return 0;
  }

  let final = 0;

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      final += i;
    }
  }

  return final;
};

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]
const digitize = (n) => {};
console.log(digitize([1, 3, 2, 5, 3]));

let strNum = 35231;
let kek = strNum.toString().split('').map(Number).reverse();
console.log(kek);

let tt = '1';
console.log(tt.toString());

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  return '';
}

let strH = 0;
let strM = 0;
let strS = 0;
let seconds = 5400;
let ostatok = 0;
// дальше дрочим эту хуйню
let koefficiet = 0;
//в какое условие ныряем

// console.log(5400 % 3600)

// function isInteger(num) {
//   return (num ^ 0) === num;
// }

// console.log( isInteger(1) ); // true
// console.log( isInteger(1.5) ); // false
// alert( isInteger(-0.5) ); // false

// если ты добавляешь, а оно меньше
let someA = 5;
let someB = 7;
let kekSome = [];

for (let i = someA; i <= someB; i += someA) {
  kekSome.push(i);
}
console.log(kekSome);

const findMultiples = (integer, limit) => {
  let multiplesArr = [];
  for (let i = integer; i <= limit; i += integer) {
    multiplesArr.push(i);
  }
  return multiplesArr;
};
console.log(findMultiples(11, 54));

// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

// Convert PascalCase string into snake_case

function toUnderscore(string) {
  // TODO: complete
}

let kek1 = [
  {
    name: 'Уровень 1',
    threshold: 4999,
    description: [
      {
        text: 'Кешбэк на покупки ',
        value: ' 1%',
        additional: null,
      },
      {
        text: 'Кешбэк на продукцию собственного производства ',
        value: ' 1%',
        additional: null,
      },
      {
        text: 'Кешбэк на День рождения',
        additional: null,
      },
    ],
    preferences: '1',
  },
  {
    name: 'Уровень 2',
    threshold: 9999,
    description: [
      {
        text: 'Кешбэк на покупки ',
        value: ' 1%',
        additional: null,
      },
      {
        text: 'Кешбэк на продукцию собственного производства ',
        value: ' 3%',
        additional: null,
      },
      {
        text: 'Кешбэк на День рождения',
        additional: null,
      },
    ],
    preferences: '1',
  },
  {
    name: 'Уровень 3',
    threshold: null,
    description: [
      {
        text: 'Кешбэк на покупки ',
        value: ' 1%',
        additional: null,
      },
      {
        text: 'Кешбэк на продукцию собственного производства ',
        value: ' 5%',
        additional: null,
      },
      {
        text: 'Кешбэк на День рождения',
        additional: null,
      },
    ],
    preferences: '1',
  },
];

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

// Stop gninnipS My sdroW!
// 296352791% of 23,67881,980 of 229,400xDranik5 Issues Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// инструкции
// Выход
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

describe('Spinning words', () => {
  it('Sample tests', () => {
    assert.strictEqual(spinWords('Welcome'), 'emocleW');
    assert.strictEqual(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
    assert.strictEqual(spinWords('This is a test'), 'This is a test');
    assert.strictEqual(
      spinWords('This is another test'),
      'This is rehtona test'
    );
    assert.strictEqual(
      spinWords('You are almost to the last test'),
      'You are tsomla to the last test'
    );
    assert.strictEqual(
      spinWords('Just kidding there is still one more'),
      'Just gniddik ereht is llits one more'
    );
    assert.strictEqual(
      spinWords('Seriously this is the last one'),
      'ylsuoireS this is the last one'
    );
  });
});

const spinWords = (string) => {
  arr = string.split(' ');
  return arr;
};
console.log(spinWords('Hey fellow warriors'));

let space = '';
let arr1 = ['Hey', 'fellow', 'warriors'];
let newArr = arr1.map((item) => {
  if (item.length > 5) {
    return item.split('').reverse();
  } else {
    return item.split('');
  }
});
console.log(newArr);

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
describe('Sample Tests', () => {
  it('Should pass Sample Tests', () => {
    assert.strictEqual(
      sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'),
      'Hello, John Smith! Welcome to Phoenix, Arizona!'
    );
    assert.strictEqual(
      sayHello(['Franklin', 'Delano', 'Roosevelt'], 'Chicago', 'Illinois'),
      'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
    );
    assert.strictEqual(
      sayHello(['Wallace', 'Russel', 'Osbourne'], 'Albany', 'New York'),
      'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!'
    );
  });
});
function sayHello(name, city, state) {}

describe('Basic tests', () => {
  Test.assertEquals(billboard('Jeong-Ho Aristotelis'), 600);
  Test.assertEquals(billboard('Abishai Charalampos'), 570);
  Test.assertEquals(billboard('Idwal Augustin'), 420);
  Test.assertEquals(billboard('Hadufuns John', 20), 260);
  Test.assertEquals(billboard('Zoroaster Donnchadh'), 570);
  Test.assertEquals(billboard('Claude Miljenko'), 450);
  Test.assertEquals(billboard('Werner Vígi', 15), 165);
  Test.assertEquals(billboard('Anani Fridumar'), 420);
  Test.assertEquals(billboard('Paolo Oli'), 270);
  Test.assertEquals(billboard('Hjalmar Liupold', 40), 600);
  Test.assertEquals(billboard('Simon Eadwulf'), 390);
});

// const billboard = (name, price = 30) => {
//   let output;
//   const arrL = name.split('').length;
//   if (price) {
//     output = arrL * price;
//   } else if (price != 30) {
//     output = arrL * price;
//   } else {
//     output = arrL * 30;
//   }
//   return output;
// };

function billboard(name, price = 30) {
  let total = 0;
  for (i = 0; i < name.length; i++) {
    total += price;
  }
  return total;
}

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// Note: this kata uses strict construction as shown in the description and the examples, you can read more about it here

const Test = require('@codewars/test-compat');

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(century(1705), 18, 'Testing for year 1705');
    Test.assertEquals(century(1900), 19, 'Testing for year 1900');
    Test.assertEquals(century(1601), 17, 'Testing for year 1601');
    Test.assertEquals(century(2000), 20, 'Testing for year 2000');
    Test.assertEquals(century(89), 1, 'Testing for year 89');
  });
});
// Testing for year 488653: expected 49 to equal 4887

const century = (year) => {
  return Math.ceil(year / 100);
};

console.log(century(1700));

const year = 488653;
let half = year / 100;
console.log(half);
console.log(Number(half.toFixed()) + 1);

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

const abbrevName = (name) => {
  let nameArr = name.split('');
  const find = [];
  for (let i = 0; i < nameArr.length; i++) {
    if (nameArr[i] === ' ') {
      find.push(nameArr[i + 1]);
    }
  }
  const second = find[0];

  return name[0].toUpperCase() + '.' + second.toUpperCase();
};

console.log(abbrevName('DreQwsGXvIaulmFouah pzvLgKAFJGMSL'));

let name = 'Sam Harris';
let nameArr = name.split('');
const find = [];
for (let i = 0; i < nameArr.length; i++) {
  if (nameArr[i] === ' ') {
    find.push(nameArr[i + 1]);
  }
}

console.log(find);

const second = find[0];

console.log(name[0] + '.' + second);
console.log(['H'].join(''));

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

function findNeedle(haystack) {}

console.log(
  findNeedle([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    8,
    7,
    5,
    4,
    3,
    4,
    5,
    6,
    67,
    5,
    5,
    3,
    3,
    4,
    2,
    34,
    234,
    23,
    4,
    234,
    324,
    324,
    'needle',
    1,
    2,
    3,
    4,
    5,
    5,
    6,
    5,
    4,
    32,
    3,
    45,
    54,
  ])
);

const products = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  'needle',
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

const first5 = products.find((element, index) => {
  if (element === 'needle') {
    kek = index;
  }
});
console.log(kek);

const findNeedle = (haystack) => {
  let num = 0;
  const serch = haystack.find((element, index) => {
    if (element === 'needle') {
      num = index;
    }
  });
  if (Boolean(num)) {
    return `found the needle at position ${num}`;
  }
  return "Your function didn't return anything";
};

// console.log(Boolean(0))

console.log(
  findNeedle([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    8,
    7,
    5,
    4,
    3,
    4,
    5,
    6,
    67,
    5,
    5,
    3,
    3,
    4,
    2,
    34,
    234,
    23,
    4,
    234,
    324,
    324,
    'needle',
    1,
    2,
    3,
    4,
    5,
    5,
    6,
    5,
    4,
    32,
    3,
    45,
    54,
  ])
);

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// let strD = 'aabBcde'
// const arrD = strD.split('');
// const deplicate1 = {};
// const deplicate1Arr = [];
// for (const item of arrD) {
//   // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
//   deplicate1[item] = deplicate1[item] ? deplicate1[item] + 1 : 1;
//   // console.log(item);
// }
// console.log(deplicate1);

// const valueD = Object.values(deplicate1);
// // console.log(valueD);
// const outputD = [];
// valueD.forEach(item => {
//   if(item !== 1) {
//     outputD.push(item);
//   }
// });
// console.log(outputD.length);

let strD = 'aabBcde';
const duplicateCount = (text) => {
  let strD = text.toLowerCase();
  const arrD = strD.split('');
  const deplicate1 = {};

  for (const item of arrD) {
    deplicate1[item] = deplicate1[item] ? deplicate1[item] + 1 : 1;
  }

  const valueD = Object.values(deplicate1);
  const outputD = [];

  valueD.forEach((item) => {
    if (item !== 1) {
      outputD.push(item);
    }
  });

  return outputD.length;
};

console.log(duplicateCount('aabBcde'));

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

// function isValidWalk(walk) {
//   //insert brilliant code here
// }

// describe('Tests', () => {
//   it('test', () => {
//     //some test cases for you...
//     assert.isTrue(
//       isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
//       'should return true'
//     );
//     assert.isFalse(
//       isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
//       'should return false'
//     );
//     assert.isFalse(isValidWalk(['w']), 'should return false');
//     assert.isFalse(
//       isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']),
//       'should return false'
//     );
//   });
// });

// const walk = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];
// let timer = 0;

// for (let i = 0; i < walk.length; i++) {
//   if (walk[i] === 'n' && walk[i+1] === 's') {
//     timer = timer + 2
//   }
//   if (walk[i] === 's' && walk[i+1] === 'n') {
//     timer = timer + 2
//   }
//   if (walk[i] === 'w' && walk[i+1] === 'e') {
//     timer = timer + 2
//   }
//   if (walk[i] === 'w' && walk[i+1] === 'e') {
//     timer = timer + 2
//   }

// }
// console.log(timer);
// if(timer === 10) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const countArr = [];
// let nCount = 0;
// let sCount = 0;
// let wCount = 0;
// let eCount = 0;

// for (let i = 0; i < walk.length; i++) {
//   if (walk[i] === 'n' && walk[i + 1] === 'n') {
//     timer = timer + 1;
//     console.log(timer);
//   } else if(walk[i] === 'n' && walk[i + 1] === 's') {
//     timer = timer - 1;
//     console.log(timer);
//   }
// }

// console.log(timer);

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
function alphabetPosition(text) {
  return text;
}

const Test = require('@codewars/test-compat');

describe('Tests', () => {
  it('test', () => {
    Test.assertEquals(
      alphabetPosition("The sunset sets at twelve o' clock."),
      '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
    );
    Test.assertEquals(
      alphabetPosition('The narwhal bacons at midnight.'),
      '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
    );
  });
});

const alphabetStart = "The sunset sets at twelve o' clock.";
const alphabetLowerStr = alphabetStart.toLocaleLowerCase();
const dirertyAlphabetArr = alphabetLowerStr.split('');
console.log(dirertyAlphabetArr);
const alphabetNumArr = [];
dirertyAlphabetArr.forEach((item) => {
  if (item === 'a') {
    alphabetNumArr.push(1);
  } else if (item === 'b') {
    alphabetNumArr.push(2);
  } else if (item === 'c') {
    alphabetNumArr.push(3);
  } else if (item === 'd') {
    alphabetNumArr.push(4);
  } else if (item === 'e') {
    alphabetNumArr.push(5);
  } else if (item === 'f') {
    alphabetNumArr.push(6);
  } else if (item === 'g') {
    alphabetNumArr.push(7);
  } else if (item === 'h') {
    alphabetNumArr.push(8);
  } else if (item === 'i') {
    alphabetNumArr.push(9);
  } else if (item === 'j') {
    alphabetNumArr.push(10);
  } else if (item === 'k') {
    alphabetNumArr.push(11);
  } else if (item === 'l') {
    alphabetNumArr.push(12);
  } else if (item === 'm') {
    alphabetNumArr.push(13);
  } else if (item === 'n') {
    alphabetNumArr.push(14);
  } else if (item === 'o') {
    alphabetNumArr.push(15);
  } else if (item === 'p') {
    alphabetNumArr.push(16);
  } else if (item === 'q') {
    alphabetNumArr.push(17);
  } else if (item === 'r') {
    alphabetNumArr.push(18);
  } else if (item === 's') {
    alphabetNumArr.push(19);
  } else if (item === 't') {
    alphabetNumArr.push(20);
  } else if (item === 'u') {
    alphabetNumArr.push(21);
  } else if (item === 'v') {
    alphabetNumArr.push(22);
  } else if (item === 'w') {
    alphabetNumArr.push(23);
  } else if (item === 'x') {
    alphabetNumArr.push(24);
  } else if (item === 'y') {
    alphabetNumArr.push(25);
  } else if (item === 'z') {
    alphabetNumArr.push(26);
  }
});
console.log(alphabetNumArr.join(' '));

const stringDelFirstLast = (string) => {
  if (str === '' || str.indexOf(',') === -1) {
    return null;
  } else {
    let arr = str.split(',');
    arr.shift();
    arr.pop();
    if (arr.length === 0) {
      return null;
    } else {
      return arr.join(' ');
    }
  }
};
