// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if(num > 3) {
//                 reject("promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color change");
//         }, delay);
//     });
// };

// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("green", 1000);
//         await changeColor("blue", 1000);
//     } catch(err) {
//         console.log("error caught");
//         console.log(err);
//     }
    

//     let a = 5;
//     console.log(a);
//     console.log("new number = ", a + 3);
// }

// changeColor("red", 1000)
// .then(() => {
//     console.log("red clor was completed");
//     return changeColor("orange", 1000);
// })
// .then(() => {
//     console.log("ornage was completed");
//     return changeColor("green", 1000);
// })
// .then(() => {
//     console.log("green color was completed");
//     return changeColor("blue", 1000);
// })
// .then(() => {
//     console.log("blue color was completed");
// })

// async function greet() {
//     throw "some random error";
//     return "hello!";
// }

// greet()
// .then((result) => {
//     console.log("promise was successful");
//     console.log("result was : ", result);
// })
// .catch((err) => {
//     console.log("some erorr", err);
// })

// let demo = async () => {

//}

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }

// let jsonRes = '{"fact":"The life expectancy of cats has nearly doubled since 1930 - from 8 to 16 years.","length":79}';

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let student = {
//     name: "shradha",
//     marks: 95,
// };

let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log("data1 = ", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 ", data2.fact);
// })
// .catch((err) => {
//     console.log("ERROR - ", err);
// });

async function getFacts() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    } catch(e) {
        console.log(e);
    }
}

