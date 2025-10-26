// function hello() {
//     console.log("Hello World");
// }

// hello();

// function printName() {
//     console.log("name");
// }

// function print1to5() {
//     for(let i=0; i<=5; i++) {
//         console.log(i);
//     }
// }

// print1to5()

// function dice() {
//     console.log(Math.floor((Math.random() * 6) + 1));
// }

// dice();

// function printName(name) {
//     console.log(name);
// }

// printName("hello");

// function sum(num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(2 + 2));

// function table(n) {
//     for(let i=1; i<=10; i++) {
//         console.log(n*i);
//     }
// }

// table(10)

// function sum(a, b) {
//     return a + b;
// }


// console.log(sum(sum(1,2),3))

// function sumN(n) {
//     return Math.floor((n*(n+1))/2)
// }

// console.log(sumN(10));

let str = ["hi", "hello", "bye", "!"];


// function concat(str) {
//     let result = "";

//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }

// console.log(concat(str));

// let sum = function(a, b) {
//     return a + b;
// }

// console.log(sum(2,3))

// let greet = function() {
//     console.log("hello");
// }

// function mulGreet(func, count) {
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }

// mulGreet(function() {console.log("Hello")}, 1000)



// function OddOrEvenFactory(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2==0));
//         }

//     } else if(request == "even") {
//         return function(n) {
//             console.log(n%2 == 0);
//         }
//     } else {
//         console.log("wrong request");
//     }
// }

// let request = "odd"

// let func = OddOrEvenFactory(request);
// func(4);

const calculator = {
    num: 55,
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};

console.log(calculator.mul(2, 3));