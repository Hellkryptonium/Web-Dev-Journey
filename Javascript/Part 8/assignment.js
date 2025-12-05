let arr = [1, 2, 3, 4, 5];

// let square = arr.map((nums) => nums * nums);
// console.log(square);

// let sum = arr.reduce((res, el)=>res + el,0);

// let avg = sum/arr.length
// console.log(sum);
// console.log(avg);

// let newArr = arr.map((nums)=> nums+5);
// console.log(newArr);

// let strings = ["adam", "bob", "catlyn", "donald", "eve"];
// console.log(strings.map((string) => string.toUpperCase()));

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v*2),
// ];

// console.log(doubleAndReturnArgs([1,2,3],4,4))

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a:1,b:2}, {c:3, d:4}))
