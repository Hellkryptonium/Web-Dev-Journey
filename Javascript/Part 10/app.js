// let btn = document.querySelector("button");
// console.dir(btn)

// // btn.onclick = function () {
// //     alert("button was clicked");
// // };

// function sayHello() {
//     alert("Hello!");
// }

// btn.onclick = sayHello;

// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onclick = sayName;

//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function() {
//         console.log("you doubled click");
//     });
// }

// function sayHello() {
//     alert("Hello");
// }

// function sayName() {
//     alert("Apna College");
// }

// let p = document.querySelector("p");

// p.addEventListener("click", function() {
//     console.log("parah was clicked");
// });

// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function (){
//     console.log("mouse was inside box");
// });

let btn = document.querySelector("button");


// btn.addEventListener("click", function (event) {
//     console.log(event);
//     console.log("button clicked");
// });

// btn.addEventListener("dblclick", function (event) {
//     console.log(event);
//     console.log("button clicked");
// });

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function() {
//     console.log("key was pressed");
// });

// inp.addEventListener("keydown", function(event) {
//     console.log("key was pressed"); // arrow up, down, left, right

//     if(event.code == "ArrowUp") {
//         console.log("character moves forward")
//     } else if(event.code == "ArrowDown") {
//         console.log("character moves backward")
//     } else if (event.code == "ArrowLeft") {
//         console.log("character moves left");
//     } else if (event.code == "ArrowRight") {
//         console.log("character moves right");
//     }
// });

// let form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();

//     // console.dir(form);

//     // let user = this.elements[0];
//     // let pass = this.element[1];

    
    
//     // // let user = document.querySelector('#user');
//     // // let pass = document.querySelector('#pass');

//     // console.log(user.value);
//     // console.log(pass.value);

//     // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// })


// let user = document.querySelector('#user');

// user.addEventListener("change", function() {
    
//     console.log("change event");
//     console.log("final value = ", user.value);
// });

// user.addEventListener("input", function() {
    
//     console.log("input event");
//     console.log("final value = ", user.value);
// });

let inp = document.querySelector("#text");
let p = document.querySelector("p");


inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
});