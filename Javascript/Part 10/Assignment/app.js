//Q1

window.addEventListener("load", ()=> {
    console.log("page loaded");
});

const box = document.getElementById("box");
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "orange";
});

const keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keypress", (e) => {
    console.log("key pressed: ", e.key);
})

window.addEventListener("scroll", () => {
    console.log("Scrollig...");
})

//Q2

const btn = document.createElement("button");
btn.textContent = "Click Me";

btn.addEventListener("click", () => {
  btn.style.backgroundColor = "green";
  btn.style.color = "white";
});

document.getElementById("buttonContainer").appendChild(btn);

//Q3
const nameInput = document.getElementById("nameInput");
const nameHeading = document.getElementById("nameHeading");

nameInput.addEventListener("input", ()=> {
    const cleanValue = nameInput.value.replace(/[^a-zA-Z ]/g, "");

    nameInput.value = cleanValue;
    nameHeading.textContent = cleanValue;
})