// let html = '';
// const result = document.querySelector('.result')
// console.log(result);
// const arr1 = [
//    {
//       id: 0,
//       text: 'kek0',
//       decription: 'kek1',
//       price: 1000,
//       current: 2
//    },
//    {
//       id: 0,
//       text: 'kek0',
//       decription: 'kek1',
//       price: 1000,
//       current: 2
//    },
//    {
//       id: 1,
//       text: 'kek1',
//       decription: 'kek1',
//       price: 2000,
//       current: 2
//    },
// ]
// const mergedArr = Object.values(arr1.reduce((acc, cur) => {
//     if (!acc[cur.id]) {
//       acc[cur.id] = { ...cur };
//     } else {
//       acc[cur.id].price += cur.price;
//       acc[cur.id].current += cur.current;
//     }
//     return acc;
//   }, {}));

//   console.log(mergedArr)

//   mergedArr.forEach(item => {
//     html +=
//    `
//       <div>ID: ${item.id}</div>
//       <div>TEXT: ${item.text}</div>
//       <div>decription: ${item.decription}</div>
//       <div>price: ${item.price}</div>
//       <div>current:${item.current}</div>
//    `
//    })
//    result.innerHTML = html;
//    console.log(arr1)

const arr1 = [
  {
    id: 0,
    text: 'kek0',
    decription: 'kek1',
    price: 1000,
    current: 2,
  },
  {
    id: 0,
    text: 'kek0',
    decription: 'kek1',
    price: 1000,
    current: 2,
  },
  {
    id: 1,
    text: 'kek1',
    decription: 'kek1',
    price: 2000,
    current: 2,
  },
];

const resultArr1 = arr1.reduce((acc, cur) => {
  ((acc[cur.id] = (acc[cur.id] || 0) + cur.price), arr1), {};
});

console.log(resultArr1);

const mergedArr = Object.values(
  arr1.reduce((acc, cur) => {
    if (!acc[cur.id]) {
      acc[cur.id] = { ...cur };
    } else {
      acc[cur.id].price += cur.price;
      acc[cur.id].current += cur.current;
    }
    return acc;
  }, {})
);

// const  arr = [{idBox: "15", id: 13, price: 8805},
//               {idBox: "6", id: 14, price: 4467},
//               {idBox: "6", id: 15, price: 18853},
//               {idBox: "7", id: 16, price: 5649},
//               {idBox: "7", id: 17, price: 3645},
//               {idBox: "7", id: 18, price: 2505},
//               {idBox: "7", id: 19, price: 4397},
//               {idBox: "8", id: 20, price: 5548},
//               {idBox: "8", id: 21, price: 3645},
//               {idBox: "8", id: 22, price: 3645}];

// let res = Object.fromEntries(arr.map(item => [item.idBox, 0]));
// arr.forEach(item => {res[item.idBox] += item.price})
// console.log(arr)

// let result = arr.reduce((a,c) => (a[c.idBox] = (a[c.idBox] || 0) + c.price, a), {});
// console.log(result);
