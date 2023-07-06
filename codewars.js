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
  // let num = 999;

  // console.log(strNum);
  let mnojitel;
  let lenth;
  arrNum = String(num).split('').map(Number);
  if ((arrNum.length = 1)) {
    return 0;
  } else {
    while (arrNum.length != 1) {
      mnojitel = arrNum.reduce((acc, rec) => acc * rec);
      // console.log(mnojitel)
      arrNum = String(num).split('').map(Number);
      // arrNum = [];
      arrNum.push(mnojitel);
    }
  }

  return arrNum;
};
console.log(persistence(999));

const array = [9, 9, 9];
const res = array.reduce((acc, rec) => acc * rec);

console.log(res);

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
