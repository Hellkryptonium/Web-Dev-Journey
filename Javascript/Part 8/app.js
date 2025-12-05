// let arr = [1, 2, 3, 4, 5];

// let print = function(el) {
//     console.log(el);
// };

// arr.forEach(print);

// arr.forEach(function(el) {
//     console.log(el);
// });

// arr.forEach((el) => {
//     console.log(el);
// });

// let students = [{
//     name: "aman",
//     marks: 95
// }, 
// {
//     name: "shradha",
//     marks: 94.4
// },
// {
//     name: "rajat",
//     marks: 95
// }];

// let gpa = students.map((el) => {
//     return el.marks/10;
// })

// arr.forEach((student) =>{
//     console.log(student.name);
// })

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el*2;
// })

// console.log(gpa);

// let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10];
// let ans = nums.filter((el) => {
//     return el % 2 == 0; //even->true, odd->false
// })

// console.log(ans);

// let nums = [1, 2, 3, 4];
// let finvalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(finvalVal);

// let arr = [1, 4, 2, 5, 6, 7, 2,, 9, 2];

// let max = -1;
// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// }

// console.log(max);

// let max = arr.reduce((max, el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(max);

//let nums = [10, 20, 30, 40];

// let ans = nums.every((el) => {return el % 10 == 0});

// console.log(ans);



// function getMin(nums) {
//     let min = nums.reduce((min, el) => {
//         if(min > el) {
//             return el;
//         } else {
//             return min;
//         }
//     });
//     return min;
// }

// console.log(getMin([2, 3, 4, -1]));

// function sum(a, b=2) {
//     return a + b;
// }

// console.log(sum(1,3))

// let arr = [1, 2, 3, 4];

// let newArr = [...arr];
// newArr.push(-1);
// console.log(newArr);

// let chars = [..."hello"];
// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8, 10];

// let nums = [...odd, ...even];
// console.log(nums);

// const data = {
//     email: "ironman@gmail.com",
//     password: "abcd",
// };

// const dataCopy = {...data, id: 123, country: "india"}

// console.log(dataCopy);

// let arr = [1, 2, 3, 4, 5];
// let obj1 = {...arr};
// let obj2 = {..."Harish"}
// console.log(obj);

// function sum(...args) {
//     for(let i=0; i<args.length; i++) {
//         console.log("you gave us", args[i]);
//     }
// }

// console.log(sum(1, 2, 3))

// function min(a, b, c, d) {
//     console.log(arguments);
// }

// min();

// function sum(...args) {
//     return args.reduce((sum, el) => sum + el);
// }

// console.log(sum(1, 2, 3, 4, 5));

// function min(msg, ...args) {
//     console.log(msg);
//     return args.reduce((min, el) => {
//         if(min > el) {
//             return el;
//         } else {
//             return min;
//         }
//     });
// };

// console.log(min("hello",1, 2, 3, 4, -1))

// let names = ["tony", "bruce", "peter", "steve"];
// // let winner = names[0];
// // let runnerup = names[1];
// // let secondrunnperup = names[2];

// let [winner, runnerup, ...others] = names;

// console.log(winner);
// console.log(runnerup);
// console.log(others);

// const student = {
//     name: "karan",
//     age: 14,
//     class: 9,
//     subjects: ["hindi", "english", "math", "science"],
//     username: "karan@123",
//     password: "abcd",
//     city: "pune"
// }

// let {username: user, password: secret, city: place ="mumbai"} = student;

// console.log(user, secret, place);