// const pointsPer48 = (ppg, mpg) => {
//    let points;
//    const fullGame = 48;
//    if (ppg === 0 || mpg === 0) {
//       return 0;
//    }
//    points = (ppg / mpg) * fullGame;
//    return Number(points.toFixed(1));
// };
// console.log(pointsPer48(12, 20));
// pgg очки за игру
//mpg минуты за игру

// pgg / mpg * 48

// isIsogram "Dermatoglyphics" = true; нет повтор букв
// isIsogram "moose" = false; есть повтор буквы
// isIsogram "aba" = false;

// function isIsogram(str){
//     let arr = str.split('');
//     let count = 0;
//     // return test
// }
// console.log(isIsogram('Dermatoglyphics'));

// const isIsogram = (str) => {
//     let i, j;
//     str = str.toLowerCase();
//     for (i = 0; i < str.length; i++) {
//         for (j = i + 1; j < str.length; j++) {
//         if(str[i] === str[j]) {
//           return false;
//         }
//       }
//     }
//     return true;
//  }

//  console.log(isIsogram('moose'));

// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает значение "Even"для четных или "Odd"нечетных чисел.
// const evenOrOdd = (number) => {
//    if (number % 2 === 0) {
//       return "Even";
//    }
//    return "Odd";
// };

// Создайте функцию, которая принимает 2 целых числа в виде строки в качестве входных данных и выводит сумму (также в виде строки):
// Если какой-либо вход является пустой строкой, считайте ее нулевой.

// const sumStr = (a, b) => {
//    if (a === '') {
//       a === 0;
//    }
//    if (b === '') {
//       b === 0;
//    }
//    let total = Number(a) + Number(b);
//    total = String(total);
//    return total.toString();
// };
// console.log(sumStr('22', '22'));

// let a = '22';
// let b = '22';

// let total = Number(a) + Number(b);
// total = String(total);
// console.log(typeof(total));

const usdcny = (usd) => {
   const yuan = usd * 6.75;
   yuan.toFixed(2);
   return yuan.toString() + ' Chinese Yuan';
};
console.log(usdcny(1));

// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
// Only numbers without decimals like 4 or 4.0 can be even.
// The input is a sequence of numbers: integers and/or floats.
// Examples
// [4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
const input = [4, 3, 1, 2, 5, 10, 6, 7, 9, 8];

// const sumEvenNumbers = (input) => {
//    const arrHonestNum = [];
//    input.forEach(number => {
//       if (number % 2 === 0) {
//          arrHonestNum.push(number)
//       }
//    });
//    let sum = arrHonestNum.reduce((a, b) => a + b);
//    return sum;
// }

function sumEvenNumbers(input) {
   const filteredSeq = input.filter((num) => Number.isInteger(num) && num % 2 === 0);
   return filteredSeq.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumEvenNumbers(input));

// let test = []
// input.forEach(number => {
//    if (number % 2 === 0) {
//       test.push(number)
//       console.log(test)
//    }
// })
// let sum = test.reduce((a, b) => a + b)
// console.log(sum)

// descendingOrder(123456789), 987654321

function descendingOrder(n) {
   //...
}

// let number = 123456789;
// let numberArr = [];
// numberArr.push(number)
// numberArr.forEach(number => {
//    console.log(number);
// })

console.log(numberArr);

// const number = 1021;
// const array = ('' + number).split('').map(Number)
// array.sort((a, b) => {
//    return b - a;
// });
// const newNumber = array.join('');
// console.log(Number(newNumber));

// let y = ['1', '2', '1', '2', '1', '2', '1', '2'].map(Number);
// console.log((y))

const descendingOrder = (n) => {
   const array = ('' + n).split('').map(Number);
   array.sort((a, b) => {
      return b - a;
   });
   const newNumber = array.join('');
   return Number(newNumber);
};

console.log(descendingOrder(number));

let s = "Let's travel abroad shall we";

function findShort(s) {
   s = s.split(' ');
   const ssArr = [];
   s.forEach((item) => {
      ssArr.push(item.length);
   });
   return Math.min(...ssArr);
}
console.log(findShort(s));

// let s = "Let's travel abroad shall we";
// s = s.split(' ');
// console.log(s);
// const ssArr = [];
// const ss = s.forEach(item => {
//    ssArr.push(item.length);
// })
// console.log(ssArr);
// console.log(Math.min(...ssArr));

// let s = "Let's travel abroad shall we";
s = s.split(' ');
console.log(s);
const newS = s.map((item) => item.length);
console.log(newS);

// .map(w => w.length)

// let kkk = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let kkk2 = [...kkk]
// console.log(kkk2)

// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// function getSum(a, b) {

// }
// let min = -1;
// let max = 0;

const getSum = (min, max) => {
   if (min === max) {
      return min;
   } else if (min > max) {
      return 0;
   } else {
      const sum = [];
      for (let i = min; i <= max; i++) {
         sum.push(i);
      }
      let sumNum = 0;
      sum.forEach((num) => {
         sumNum += num;
      });
      return sumNum;
   }
};

// const getSum = (a, b) => {
//    let sum = 0;
//    for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//      sum += i;
//    }
//    return sum;
//  }

console.log(getSum(-1, -1));

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

let a = 'xyaabbbccccdefww';
let b = 'xxxxyyyyabklmopq';

// "abcdefklmopqwxy"

// let resultString = '';
// const arrA = [];
// const arrB = [];
// arrA.push(a);
// arrB.push(b);

const arrA = a.split('');
const arrB = b.split('');
let resultArr = [...arrA, ...arrB];
console.log(resultArr);
const resultArrFinal = (arr) => [...new Set(arr)];
console.log(resultArrFinal(resultArr).sort().join(''));

const longest = (a, b) => {
   const arrA = a.split('');
   const arrB = b.split('');
   let resultArr = [...arrA, ...arrB];
   const resultArrFinal = (arr) => [...new Set(arr)];
   return resultArrFinal(resultArr).sort().join('');
};

// for (let i = 0; i < arrA.length; i++) {
//    for (let j = 0; j < resultArr.length; i++) {
//       if (resultArr[j] != arrA[i]) {
//         resultArr.push
//      }
//    }
// }

// const array = [1, 2, 3, 1, 1, '1', '2', '1', true, false, true, null, undefined, null, null, undefined];

// const makeUniq = (arr) => [...new Set(arr)];

// makeUniq(array);

// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// i.e.
// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]

const friend = (arr) => {
   const trueFriends = [];
   arr.forEach((name) => {
      if (name.length === 4) {
         trueFriends.push(name);
      }
   });
   return trueFriends;
};

console.log(friend(['Ryan', 'Kieran', 'Mark']));

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

let str = 'hello';
const getCount = (str) => {
   let count = 0;
   let newStr = str.split('');
   newStr.forEach((item) => {
      if (item === 'a') {
         count++;
      } else if (item === 'e') {
         count++;
      } else if (item === 'i') {
         count++;
      } else if (item === 'o') {
         count++;
      } else if (item === 'u') {
         count++;
      } else {
         return (count += 0);
      }
   });
   return count;
};
console.log(getCount(str));

// Given an array of numbers, return the difference between the largest and smallest values.
// For example:
// [23, 3, 19, 21, 16] should return 20 (i.e., 23 - 3).
// [1, 434, 555, 34, 112] should return 554 (i.e., 555 - 1).
// The array will contain a minimum of two elements. Input data range guarantees that max-min will cause no integer overflow.

numbers = [23, 3, 19, 21, 16];
const betweenExtremes = (numbers) => {
   let value;
   const maxNum = numbers.reduce((acc, number) => (number > acc ? number : acc), numbers[0]);
   const minNum = numbers.reduce((acc, number) => (number < acc ? number : acc), numbers[0]);
   return (value = maxNum - minNum);
};
console.log(betweenExtremes(numbers));

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// You can assume that all values are integers. Do not mutate the input array/list.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
const arrN = [1, 2, 3, 4, 5];
const invert = (array) => {
   const cloneArr = Object.assign([], array);
   const newArr = cloneArr.map((item) => {
      return item * -1;
   });
   return newArr;
};
console.log(invert(arrN));

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
// assert.strictEqual(sumStr("4","5"), "9");

const sumStr = (a, b) => {
   resultStr = Number(a) + Number(b);
   return String(resultStr);
};

console.log(sumStr('4', '5'));

// Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."
// These dots at the end also add to the string length.
// For example, trim("Creating kata is fun", 14) should return "Creating ka..."
// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.
// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"
// If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.
// e.g. trim("He", 1) should return "H...", because 1 <= 3
// Requested maximum length will be greater than 0. Input string will not be empty.

// assert.strictEqual(trim("Creating kata is fun", 14),"Creating ka...");

// let realStr = 'Code Wars is pretty rad'
// const trim = (str, size) => {
//   const points = '...';
//   let newStr = str.slice(0, size -3) + points;
//   return newStr;
// };

// console.log(trim(realStr, 14));

let realStr = 'Code Wars is pretty rad';
const arrStr = [];
arrStr.push(realStr);
console.log(arrStr);

// const realStr = 'Code Wars is pretty rad';

// const words = realStr.split(' ');
// console.log(words[3]);

// var arr = ['Code Wars is pretty rad'];
// var newArr = [];
// function stringArr(array){
//     for(var i=0; i< array.length; i++){
//         if(typeof array[i] != "string"){
//             continue;
//         }else {
//             newArr.push(array[i]);
//         }
//         }
// console.log(newArr);
// }
// stringArr(arr);

// Fix My Phone Numbers
// Oh thank goodness you're here! The last intern has completely ruined everything!
// All of our customer's phone numbers have been scrambled, and we need those phone numbers to annoy them with endless sales calls!
// The Format
// Phone numbers are stored as strings and comprise 11 digits, eg '02078834982' and must always start with a 0.
// However, something strange has happened and now all of the phone numbers contain lots of random characters, whitespace and some are not phone numbers at all!
// For example, '02078834982' has somehow become 'efRFS:)0207ERGQREG88349F82!' and there are lots more lines that we need to check.
// The Task
// Given a string, you must decide whether or not it contains a valid phone number. If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters, else return "Not a phone number".

// console.log(parseFloat("3.14"));
// let strNum = '1'
// // console.log(util.isNumeric(strNum))
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// }
// function IsNumeric(val) {
//   return Number(parseFloat(val)) === val;
// }
// console.log(isNumeric(strNum))

let phoneNumber = '0g * V O U z I N D9560187021';
const isItANum = (str) => {
   const arrNum = [];
   const isNumeric = (n) => {
      return !isNaN(parseFloat(n)) && isFinite(n);
   };
   const arrStr = str.split('');
   arrStr.filter((item) => {
      if (isNumeric(item) === true) {
         arrNum.push(item);
      }
   });
   const realNum = arrNum.join('');
   if (realNum.length != 11 || realNum[0] != 0) {
      return 'Not a phone number';
   } else {
      return realNum;
   }
};
// let phoneNumber = '0g * V O U z I N D956018702';
// const isItANum = str =>(str.replace(/\D/g,'').match(/^0\d{10}$/) || ['Not a phone number'])[0];
console.log(isItANum(phoneNumber));

// let phoneNumber = "stop calling me no I have never been in an accident";
// let test = phoneNumber.split("");
// let arrNum = [];
// let test2 = test.filter((item) => {
//   function isNumeric(n) {
//     return !isNaN(parseFloat(n)) && isFinite(n);
//   }
//   if (isNumeric(item) === true) {
//     arrNum.push(item);
//   }
// });
// realNumber = arrNum.join("");
// if(realNumber.length >11 || realNumber[0] != 0) {
//   console.log("Not a phone number");
// }
// // else if ((realNumber = "")) {
// //   console.log("Not a phone number");
// // }
// else {
//   console.log(realNumber);
// }

// console.log(realNumber.length);
// if (realNumber[0] != 0) {
//   console.log("Not a phone number");
// } else if ((realNumber = "")) {
//   console.log("Not a phone number");
// } else if (realNumber.length > 11) {
//   console.log("Not a phone number");
// } else {
//   console.log(realNumber);
// }

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength(array) {
   // Return an array containing the same strings, ordered from shortest to longest
}

// Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);

// const notSortArr = ['Beg', 'Life', 'I', 'To'];
// let startSeach = notSortArr[0];
// const sortArr = [];
// // console.log(startSeach);
// for(let i = 0; i < notSortArr.length; i++) {
//   if(startSeach.length > notSortArr[i].length) {
//     sortArr.push(notSortArr[i])
//   }
//   startSeach = notSortArr[i];
// }
// // console.log(notSortArr);
// console.log(sortArr);

const notSortArr = ['', 'Moderately', 'Brains', 'Pizza'];
// notSortArr.sort((a, b) => {
//   return a.length - b.length
// });
// console.log(notSortArr);

// const sortByLength = (arr) => {
//   arr.sort((a, b) => {
//     return a.length - b.length;
//   });
//   return arr;
// };
// console.log(sortByLength(notSortArr));

// let objArr = [];
// let finalArr = [];
// notSortArr.forEach((item) => {
//   objArr.push(
//     {
//       length: item.length,
//       item: item
//     }
//   )
// });
// // console.log(objArr);

// objArr.forEach((item) => {
//   return item.sort()
// })

// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?
// Examples:
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).
// You can assume that all inputs are valid integers.

// const roundToNext5 = (n) => {
//   if(n === 0) {
//     return 0;
//   }
//   if(n > 0) {
//     let last = n.toString().slice(-1);
//     if(n === 1) {
//       last = n + 4
//     } else if(n === 2) {
//       last = n + 3
//     } else if(n === 3) {
//       last = n + 2
//     } else if(n === 4) {
//       last = n + 1
//     } else if(n === 5) {
//       last = n
//     } else if(n === 5) {
//       last = n
//     } else if(n === 6) {
//       last = n -1
//     } else if(n === 7) {
//       last = n - 2
//     } else if(n === 8) {
//       last = n - 3
//     } else if(n === 9) {
//       last = n - 4
//     }
//     let strN = '' + n;
//     let newN = strN.slice(0, -1);
//     return newN
//   }

// }
// console.log(roundToNext5(9));

let n = -5;
// let lastNum = n % 10;
// let value = 0;
// console.log(lastNum);
// if(n === 0) {
//   console.log(0);
// } else if (n < 0) {
//   console.log(value = n - lastNum - 5)
// } else if (n === 5) {
//   console.log(5);
// } else if(lastNum != 5) {
//   console.log(value = n - lastNum + 5);
// }
// const roundToNext5 = (n) => {
//   let lastNum = n % 10;
//   let value = 0;
//   if (n === 0) {
//     return 0;
//   } else if (n < 0) {
//     return (value = n - lastNum - 5);
//   } else if (n === 5) {
//     return 5;
//   } else if (n === -5) {
//     return 0;
//   }
//    else if (lastNum != 5) {
//     return value = n - lastNum + 5;
//   }
// };
// console.log(roundToNext5(n));

const roundToNext5 = (n) => Math.ceil(n / 5) * 5;
// console.log(roundToNext5(n));

const minMax = (arr) => {
   const output = [];
   const min = Math.min(...arr);
   const max = Math.max(...arr);
   output.push(min, max);
   return output;
};

// / Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Task
// Write a function that returns both the minimum and maximum number of the given list/array.
// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
const startArr = [2334454, 5];
const output = [];
const min = Math.min(...startArr);
const max = Math.max(...startArr);
output.push(min, max);
console.log(output);
console.log(max);

// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// const result = {};
// noOneArray.forEach((item) => {
//   if (result[item] === undefined) {
//     result[item] = 1;
//   } else {
//     result[item] += 1;
//   }
// })

// for (const key in result) {
//   if (Object.hasOwnProperty.call(result, key)) {
//     const value = result[key];
//     if (value == 1) {
//       console.log(key);
//     }
//   }
// }

const noOneArray = [17, 17, 3, 17, 17, 17, 17];
const stray = (arr) => {
   const result = {};
   arr.forEach((item) => {
      if (result[item] === undefined) {
         result[item] = 1;
      } else {
         result[item] += 1;
      }
   });
   console.log(result);
   for (const key in result) {
      if (Object.hasOwnProperty.call(result, key)) {
         const value = result[key];
         if (value == 1) {
            return +key;
         }
      }
   }
};
console.log(stray(noOneArray));

// console.log(noOneArray[0] === noOneArray[2])

// const filterArr = noOneArray.filter((item, index, items) => {
//   // console.log(item);
//   // console.log(index);
//   // console.log(items);
//   console.log(items.indexOf(item) !== index ) ;
// })

// function stray(numbers) {
//   const duplicates = numbers.filter((number, index, numbers) => {
//     return numbers.indexOf(number) == index;
//   });
//   return duplicates
// }

// console.log(stray(noOneArray))

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
// Write a function which takes a list of strings and returns each line prepended by the correct number.
// The numbering starts at 1. The format is n: string. Notice the colon and space in between.
// Examples: (Input --> Output)
// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

const number = (array) => {
   const newArr = [];
   array.forEach((item, index) => {
      newArr.push(index + 1 + ':' + ' ' + item);
   });
   return newArr;
};

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// const getCount = (str) => {
//   let strArr = str.split('');
//   let count = 0;
//   // console.log(strArr);
//   strArr.forEach((item) => {
//     if(item === 'a') {
//       count++;
//     } else if(item === 'e') {
//       count++
//     } else if(item === 'i') {
//       count++;
//     } else if(item === 'o') {
//       count++;
//     } else if(item === 'u') {
//       count++;
//     }
//   });
//   return count;
// }

let strNotCount = 'abracadabra';
let strArr = strNotCount.split('');
let count = 0;
// console.log(strArr);
strArr.forEach((item) => {
   if (item === 'a') {
      count++;
   } else if (item === 'e') {
      count++;
   } else if (item === 'i') {
      count++;
   } else if (item === 'o') {
      count++;
   } else if (item === 'u') {
      count++;
   }
});
console.log(count);

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
// For example:
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

const solution = (nums) => {
   if (nums === null) {
      return [];
   } else {
      nums.sort((a, b) => {
         return a - b;
      });
   }
   return nums;
};
console.log(solution([1, 2, 3, 10, 5]));

// const noSortArr = [1, 2, 3, 10, 5]
// noSortArr.sort((a, b) => {
//   return a - b;
// });
// console.log(noSortArr)

// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
// Note: anagrams are case insensitive
// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples
// "foefet" is an anagram of "toffee"
// "Buckethead" is an anagram of "DeathCubeK"

// let str1 = 'Buckethead';
// let str2 = 'DeathCubeK';
// let str1arr = str1.toLocaleLowerCase().split('').sort();
// let str2arr = str2.toLocaleLowerCase().split('').sort();
// console.log(str1arr);
// console.log(str2arr);
// let isEqual = JSON.stringify(str1arr) === JSON.stringify(str2arr);
// console.log(isEqual);

// let str1 = 'Buckethead';
// let str2 = 'DeathCubeK';
const isAnagram = (str, originalStr) => {
   let strArr = str.toLocaleLowerCase().split('').sort();
   let originalStrArr = originalStr.toLocaleLowerCase().split('').sort();
   const isEqual = JSON.stringify(strArr) === JSON.stringify(originalStrArr);
   return isEqual;
};
// console.log(isAnagram(str1, str2));

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

let link = 'www.codewars.com#about';
let linArr = link.split('');
console.log(linArr);

function isWantedGuest(element, index, array) {
   const guestName = '#';
   return element === guestName;
}

// const partyGuests = [
//   'Даня',
//   'Саша',
//   'Юля',
//   'Лиза',
//   'Егор'
// ]
console.log(linArr.findIndex(isWantedGuest));

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

// const validatePIN = (pin) => {
//    function isNumericArray(arr) {
//       for (var i = 0; i < arr.length; i++) {
//          if (isNaN(arr[i])) {
//            return false;
//          }
//        }
//        return true;
//    }

//    function hasNaN(arr) {
//       for (var i = 0; i < arr.length; i++) {
//         if (isNaN(arr[i])) {
//           return true;
//         }
//       }
//       return false;
//     }

//    if (pin.length != 6 && pin.length != 4) {
//       return false;
//    }
//    pinNum = pin.split('').map(Number);

//    if (hasNaN(pinNum) === true) {
//       return false
//    }

//    if (isNumericArray(pinNum) === true) {
//       return true;
//    }
//    // if (isNumericArray(pinNum) === true) {
//    //    return true
//    // } else {
//    //    return false
//    // }
// }
// console.log(validatePIN('1234'));

// // let strTestNum = 'a234';
// // strTestNum = strTestNum.split('').map(Number);

// console.log(strTestNum)
// //else return true

// function isNumericArray(arr) {
//    for (var i = 0; i < arr.length; i++) {
//      if (isNaN(arr[i])) {
//        return false;
//      }
//    }
//    return true;
// }

// const q =[1,2,3,NaN]

// function isNumericArray(arr) {
//    for (var i = 0; i < arr.length; i++) {
//       if (isNaN(arr[i])) {
//         return false;
//       }
//     }
//     return true;
// }
// console.log(isNumericArray(q))

function validatePIN(pin) {
   if (/^\d+$/.test(pin)) {
      if (pin.length === 4 || pin.length === 6) {
         return true;
      }
   }
   return false;
}

const boolToWord = (bool) => {
   if (bool === true) {
      return 'Yes';
   }
   return 'No';
};
console.log(boolToWord(true));

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// const reverse = [...str].reverse().join('');
// console.log(reverse);

// let startStr = 'double  spaces';
// const newArrStr = [];
// let nstr = startStr.split(' ')
// // console.log(nstr)
// nstr.forEach(item => {
//    newArrStr.push(item.split('').reverse().join(''))
// })
// console.log(newArrStr.join(' '));

function reverseWords(str) {
   const newArrStr = [];
   let newStr = str.split(' ');
   newStr.forEach((item) => {
      newArrStr.push(item.split('').reverse().join(''));
   });
   return newArrStr.join(' ');
}

console.log(reverseWords('This is an example!'));

// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// maskify("4556364607935616") == "############5616"

// function maskify(cc) {

// }

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

const cardStr = '1';
// const cardArr = cardStr.split('');
// let l = cardArr.length - 4;
// for (let i = 0; i < l; i++) {
//    if (i > l) {
//       cardArr.splice(i, 1, '#');
//    }
// }
// console.log(cardArr.join(''));

const maskify = (cardStr) => {
   const cardArr = cardStr.split('');
   let l = cardArr.length - 4;
   for (let i = 0; i < l; i++) {
      if (i < l) {
         cardArr.splice(i, 1, '#');
      }
   }
   return cardArr.join('');
};
console.log(maskify(cardStr));
// const replacementArr = cardArr.splice(0, cardArr.length, '#')
// console.log(replacementArr);

// let link = 'www.codewars.com#about';
// let linkArr = link.split('');
// // console.log(linArr);
// let index = 0;
// // let newLinkArr = [];

// function isWantedGuest(element, index, array) {
//    const guestName = '#';
//    return element === guestName;
// }

// // const partyGuests = [
// //   'Даня',
// //   'Саша',
// //   'Юля',
// //   'Лиза',
// //   'Егор'
// // ]
// // console.log(linArr.findIndex(isWantedGuest));
// index = linkArr.findIndex(isWantedGuest);
// // console.log(index);
// linkArr.splice(index);
// console.log(linkArr.join(''));

// let link = 'www.codewars.com/katas';
// let linkArr = link.split('');
// // console.log(linkArr);
// let lastItemArr = linkArr[linkArr.length - 1]
// // console.log(lastItemArr);
// let index = 0;
// // let newLinkArr = [];

// function isWantedGuest(element, index, array) {
//    const guestName = '#';
//    return element === guestName;
// }

// index = linkArr.findIndex(isWantedGuest);
// if (index === -1 && lastItemArr == '/') {
//    linkArr.splice(index);
//    console.log(linkArr.join('') + '/');
// } else if (index === -1) {
//    linkArr.splice(index);
//    console.log(linkArr.join('') + lastItemArr);
// } else {
//    linkArr.splice(index);
//    console.log(linkArr.join('') + '/');
// }

const removeUrlAnchor = (url) => {
   const urlArr = url.split('');
   let index = 0;
   const lastItemArr = urlArr[urlArr.length - 1];
   const isWantedAnchor = (element) => {
      const anchor = '#';
      return element === anchor;
   };

   index = urlArr.findIndex(isWantedAnchor);
   if (index === -1 && lastItemArr === '/') {
      urlArr.splice(index);
      return urlArr.join('') + '/';
   } else if (index === -1) {
      urlArr.splice(index);
      return urlArr.join('') + lastItemArr;
   } else {
      urlArr.splice(index);
      return urlArr.join('');
   }
};

console.log(removeUrlAnchor('http://www.tomato.ne'));

// Number of People in the Bus

// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
// assert.strictEqual(number([[10,0],[3,5],[5,8]]),5);

const busStops = [
   [3, 0],
   [9, 1],
   [4, 10],
   [12, 2],
   [6, 1],
   [7, 10],
];

const numberBus = (busStops) => {
   const stopArr = [];
   busStops.forEach((item) => {
      let info = item.reduce((a, b) => {
         return a - b;
      });
      stopArr.push(info);
   });
   const finalBus = stopArr.reduce((a, b) => {
      return a + b;
   });
   return finalBus;
};

console.log(numberBus(busStops));

// const stopArr = [];
// busStops.forEach(item => {
//    let info = item.reduce((a, b) => {
//       return a - b;
//    });
//    stopArr.push(info);
// })

// const finalBus = stopArr.reduce((a, b) => {
//    return a + b;
// });
//  console.log(finalBus)

const arithmetic = (a, b, operator) => {
   if (operator === 'add') {
      return a + b;
   } else if (operator === 'subtract') {
      return a - b;
   } else if (operator === 'multiply') {
      return a * b;
   } else if (operator === 'divide') {
      return a / b;
   }
};

// assert.strictEqual(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
// assert.strictEqual(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
// assert.strictEqual(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
// assert.strictEqual(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");

// No oddities here
// Write a small function that returns the values of an array that are not odd.
// All values in the array will be integers. Return the good values in the order they are given.

assert.deepEqual(noOdds([0, 1, 2, 3]), [0, 2]);

let mainArr = [0, 1, 2, 3];
const oddArr = [];

mainArr.forEach((item) => {
   if (item % 2 === 0) {
      oddArr.push(item);
   }
});
console.log(oddArr);

const noOdds = (values) => {
   const oddArr = [];
   values.forEach((item) => {
      if (item % 2 === 0) {
         oddArr.push(item);
      }
   });
   return oddArr;
};

// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.
// Similar to those kinda names we need to initialize the names.
// See the pattern below:
// initials('code wars') => returns C.Wars
// initials('Barack Hussain obama') => returns B.H.Obama
// Complete the function initials.
// Names are separated by exactly one space in the input, without leading or trailing spaces. Names will always be lowercase, except optionally their first letter.

// let strNotInitials = 'code wars';
// const arrName = strNotInitials.split(' ');
// let surnameStr = arrName.pop();
// let surnameBigStr = surnameStr[0].toUpperCase() + surnameStr.slice(1);
// // console.log(arrName);
// let firstLettersArr = [];
// arrName.forEach((item) => {
//    item.toUpperCase();
//    firstLettersArr.push(item[0]);
// });
// let firstLettersStr = firstLettersArr.join('.').toUpperCase();
// console.log(firstLettersStr + '.' + surnameBigStr);

const initials = (strNotInitials) => {
   const arrName = strNotInitials.split(' ');
   let surnameStr = arrName.pop();
   let surnameBigStr = surnameStr[0].toUpperCase() + surnameStr.slice(1);

   let firstLettersArr = [];
   arrName.forEach((item) => {
      item.toUpperCase();
      firstLettersArr.push(item[0]);
   });
   let firstLettersStr = firstLettersArr.join('.').toUpperCase();
   return firstLettersStr + '.' + surnameBigStr;
};

// Two Oldest Ages
// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
// For example (Input --> Output):
// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]

// const ages = [1, 5, 87, 45, 8, 8];
// let secondNumArr = [];
// const finalNumArr = [];
// const firstNum = Math.max(...ages);
// ages.forEach((item) => {
//    if (item !== firstNum) {
//       secondNumArr.push(item);
//    }
// });
// const secondNum = Math.max(...secondNumArr);
// finalNumArr.push(firstNum, secondNum);

// // console.log(firstNum);
// // console.log(secondNum);
// console.log(finalNumArr);

// twoOldestAges([10,70,33,36,31,84,46,31,93,49,57,6,61,93,39,63,66]) should equal [93,93]: expected [ 84, 93 ] to deeply equal [ 93, 93 ]

// twoOldestAges([63,71,30,47,38,97,92,97,83,49,32,70,67,69,24,53,79,42,21,90,97,58,67,8,85,85]) should equal [97,97]: expected [ 97, 97, 97 ] to deeply equal [ 97, 97 ]

const ages = [10, 70, 33, 36, 31, 84, 46, 31, 93, 49, 57, 6, 61, 93, 39, 63, 66];
const twoOldestAges = (ages) => {
   let secondNumArr = [];
   const finalNumArr = [];
   const firstNum = Math.max(...ages);
   testArr = ages.filter((item) => item === firstNum);
   if (testArr.length > 1) {
   }
   ages.forEach((item) => {
      if (item !== firstNum) {
         secondNumArr.push(item);
      }
   });
   let secondNum = Math.max(...secondNumArr);
   finalNumArr.push(firstNum, secondNum);
   if (testArr.length > 1) {
      return testArr.slice(-2);
   } else {
      return finalNumArr.reverse();
   }
};
console.log(twoOldestAges(ages));

// let test = [];
// test = [10, 70, 33, 36, 31, 84, 46, 31, 93, 49, 57, 6, 61, 93, 39, 63, 66].filter((i) => i == 93);
// console.log(test);

// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function Fighter(name, health, damagePerAttack) {
//    this.name = name;
//    this.health = health;
//    this.damagePerAttack = damagePerAttack;
//    this.toString = function() { return this.name; }
// }

class Fighter {
   constructor(name, health, damagePerAttack) {
      this.name = name;
      this.health = health;
      this.damagePerAttack = damagePerAttack;
      this.toString = function () {
         return this.name;
      };
   }
}

// const declareWinner = () => {

// }

function declareWinner(fighter1, fighter2, firstAttacker) {
   let currentAttacker = firstAttacker;
   let opponent = currentAttacker === fighter1.name ? fighter2 : fighter1;

   while (fighter1.health > 0 && fighter2.health > 0) {
      opponent.health -=
         currentAttacker === fighter1.name ? fighter1.damagePerAttack : fighter2.damagePerAttack;
      if (opponent.health <= 0) {
         return currentAttacker;
      }
      currentAttacker = opponent.name;
      opponent = currentAttacker === fighter1.name ? fighter2 : fighter1;
   }
}

for (let i = 0; i < 100; i++) {
   console.log(declareWinner(new Fighter('Lew', 10, 4), new Fighter('Harry', 10, 4)));
}

const x = 4;
const y = 2;
const myPromise = new Promise(function (resolve, reject) {
   if (y === 0) {
      reject('Переданы некорректные данные');
   } else {
      const z = x / y;
      resolve(z);
   }
});
console.log(myPromise);

// Band name generator

// My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:
// "dolphin" -> "The Dolphin"
// However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:
// "alaska" -> "Alaskalaska"
// Complete the function that takes a noun as a string, and returns her preferred band name written as a string.

function bandNameGenerator(str) {
   // Happy coding
}

let strBand = 'alaska';
let newStrBand = strBand.split('');
console.log(newStrBand);
let firstLetter = newStrBand[0];
let secondLetter = newStrBand[newStrBand.length - 1];
console.log(firstLetter);
console.log(secondLetter);
// newStrBand.forEach((item) => {
//   console.log(item);
// if(firstLetter === secondLetter) {
newStrBand;
// }

// })
