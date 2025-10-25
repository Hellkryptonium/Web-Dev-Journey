// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(let i=0; i<arr.length; i++) {
//     if(arr[i] == num) {
//         arr.splice(i, 1);
//     }
// }

// console.log(arr);

// let num = 287152;
// let count = 0;

// while(num != 0) {
//     num = Math.floor(num/10);
//     count++;
// }

// console.log(count);

// let num = 287152;
// let sum = 0;

// while(num != 0) {
//     let digit = num%10;
//     sum += digit;
//     num = Math.floor(num/10);
// }

// console.log(sum);

// let n = 5;
// let fact = 1;
// for(let i=1; i<=n; i++) {
//     fact = fact * i;
// }
// console.log(`factorial of ${n} is ${fact}`);

let arr = [1, 2, 5, 6, 7, 2, 3];
let max = 0;
for(let i=0; i<arr.length; i++) {
    if(max < arr[i]) {
        max = arr[i];
    }
}

console.log(`the biggest number in th array is ${max}`);