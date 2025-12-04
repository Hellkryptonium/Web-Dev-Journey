// const sum = (a, b) =>{ 
//     console.log(a+b);
// };

// const cube = n => {
//     return n * n * n;
// };

// console.log(cube(2));

// const pow = (a,b) => {
//     return a**b;
// }

// console.log(pow(100,100));

// const hello = () => {
//     console.log("hello");
// }

// hello();

// const mul = (a, b) => a*b


// console.log(mul(2,3));

// console.log("hi there!");

// let id = setInterval(() => {
//     console.log("Apna College");
// }, 2000);

// console.log(id);
// clearInterval(id);

// const student = {
//     name: "aman",
//     marks: 95,
//     prop: this, //global scope
//     getName: function () {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);
//         return this.name;
//     },
//     getInfo1: function() {
//         setTimeout( ()=> {
//             console.log(this);
//         }, 2000);
//     },
//     getInfo2: function() {
//         setTimeout( function() {
//             console.log(this);
//         }, 2000);
//     },
// };

// console.log(student.getInfo1());
// console.log(student.getInfo2());

// const square = (a) => a * a;


let id = setInterval( () => {
    console.log("Hello World");
}, 2000);

setTimeout( ()=> {
    clearInterval(id);
}, 10000);