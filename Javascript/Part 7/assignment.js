// let arr = [1, 2, 3, 4];

// const arrayAverge = (arr) => {
//     let total = 0;
//     for(let number of arr) {
//         total += number;
//     }
//     return total / arr.length;
// };

// console.log(arrayAverge(arr));

// const isEven = (n) => {
//     if(n % 2 == 0) return "Even";
//     else return "Odd";
// };

// console.log(isEven(3));

// const object = {
//     message: 'Hello, World!',

//     logMessage() {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage, 1000);

let length = 4;

function callback() {
    console.log(this.length);
}

callback();
const object = {
    length: 5,
    method(callback) {
        callback();
    },
};

object.method(callback, 1, 2);