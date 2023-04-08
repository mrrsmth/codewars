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



const sumStr = (a, b) => {
   if (a === '') {
      a === 0;
   }
   if (b === '') {
      b === 0;
   }
   let total = Number(a) + Number(b);
   total = String(total);
   return total.toString();
}
console.log(sumStr('22', '22'));

// let a = '22';
// let b = '22';

// let total = Number(a) + Number(b);
// total = String(total);
// console.log(typeof(total));

const usdcny = (usd) => {
   const yuan = usd * 6.75;
   yuan.toFixed(2);
   return yuan.toString() + ' Chinese Yuan'
}
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
   const filteredSeq = input.filter(num => Number.isInteger(num) && num % 2 === 0);
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

const number = 1021;
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
}

console.log(descendingOrder(number));

let s = "Let's travel abroad shall we";

function findShort(s) {
   s = s.split(' ');
   const ssArr = [];
   s.forEach(item => {
      ssArr.push(item.length);
   })
   return Math.min(...ssArr);
}
console.log(findShort(s))

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
const newS = s.map(item => item.length)
console.log(newS);

// .map(w => w.length)


// let kkk = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let kkk2 = [...kkk]
// console.log(kkk2)

// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// function getSum(a, b) {

// }
let min = -1;
let max = 0;

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
      sum.forEach(num => {
         sumNum += num;
      })
      return sumNum;
   }
}

// const getSum = (a, b) => {
//    let sum = 0;
//    for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//      sum += i;
//    }
//    return sum;
//  }

console.log(getSum(-1, -1));

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq";

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
}



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
   })
   return trueFriends;
}

console.log(friend(["Ryan", "Kieran", "Mark"]))


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
}
console.log(boolToWord(true));

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

<<<<<<< HEAD
const str = 'double  spaces';
=======
// const str = 'double  spaces';
>>>>>>> 186661248a60f61ad06c7bd65cf490d991eac8ee

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
   let newStr = str.split(' ')
   newStr.forEach(item => {
      newArrStr.push(item.split('').reverse().join(''))
   })
   return newArrStr.join(' ');
}

console.log(reverseWords('This is an example!'));

<<<<<<< HEAD
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
}
console.log(maskify(cardStr));
// const replacementArr = cardArr.splice(0, cardArr.length, '#')
// console.log(replacementArr);
=======

// let newArr = [];
// nstr.forEach(item => {
//    newArr.push([item])
// })
// let NewArrRevers = [];
// newArr.forEach(item => {
//    NewArrRevers.push(item.reverse()) ;
// })
// console.log(NewArrRevers)
// nstr.forEach
>>>>>>> 186661248a60f61ad06c7bd65cf490d991eac8ee
