// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++) {
//     console.dir(smallImages[i].src);
// }

// console.dir(document.querySelector("h1"));

// console.dir(document.querySelector("#description"));

// console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("div a"));

// let links = document.querySelectorAll(".box a");
// // for(let i=0; i<links.length;i++) {
// //     links[i].style.color = "yellow";
// // }

// for(link of links) {
//     link.style.color = 'purple';
// }

// let para1 = document.createElement("p");
// para1.innerHTML = "Hey I'm red!";
// document.querySelector('body').append(para1);

// para1.classList.add("red");

// let heading = document.createElement("h3");
// heading.innerHTML = "I'm a blue h3!";
// document.querySelector('body').append(heading);
// heading.classList.add("blue");

// let div1 = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = document.createElement("p");

// h1.innerHTML = "I'm in a div";
// para2.innerHTML = "ME TOO!";

// div1.append(h1);
// div1.apppend(para2);
// div1.classList.add("box");
// document.querySelector('body').append(div);

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click Me";



document.querySelector('body').append(input);
document.querySelector('body').append(button);

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

let heading = document.createElement("h1");
heading.innerHTML="<style='color: purple'u>DOM Practice</u>";
document.querySelector('body').prepend(heading);

let p1 = document.createElement('p');
p1.innerHTML='<b>Apna College Delta Practice</b>';
document.querySelector('body').prepend(p1);


