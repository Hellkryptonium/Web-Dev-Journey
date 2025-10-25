// const student = {
//     name: "shraddha",
//     age: 23,
//     marks: 94.4
// };


// const item = {
//     price: 100.00,
//     discount: 50,
//     colors: ["red", "pink"]
// };


// const post = {
//     username: "@harish",
//     content: "This is my #firstPost",
//     likes: 150,
//     reposts: 5,
//     tags: ["@apnacollege", "delta"]
// };

// console.log(post["content"])
// console.log(post.content)


// const obj = {
//     1: "a",
//     2: "b",
//     true: "d",
//     null: "d",
//     undefined: "e"
// };

// const student = {
//     name: "shraddha",
//     age: 23,
//     marks: 94.4,
//     city: "delhi"
// };

// student.city = "mumbai";
// student.gender = "Female";
// delete student.age;

// console.log(student);

// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: {
//             pinCode: 123
//         }
//     },
//     shraddha: {
//         grade: "A",
//         city: "pune"
//     },
//     karan: {
//         grade: "O",
//         city: "Mumbai"
//     }
// };

// console.log(classInfo.aman.city.pinCode);

// const classInfo = [
//     {
//         name: "aman",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "shradha",
//         grade: "A",
//         city: "Pune"
//     },
//     {
//         name: "karan",
//         grade: "O",
//         city: "Mumbai"
//     }
// ];

// classInfo[1].gender = "F"

// console.log(classInfo);

// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// num = num + 1;
// console.log(num);
// console.log(Math.floor((Math.random()*10) + 1))

// console.log(Math.floor((Math.random() * 100) + 1))

const max = prompt("enter the max number");

const random =Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;
    }

    if(guess == random) {
        console.log("you are right! congrats!", random);
        break;
    } else if(guess < random) {
        guess = prompt("hint : your guess was too small try again");
    } else {
        guess = prompt("hint : your guess was too large, please try again");
    }
    
}