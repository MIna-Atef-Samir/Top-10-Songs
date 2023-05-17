let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let two = document.querySelector(".two");

document.querySelector(".btn").addEventListener("click", () => {
    two.style.display = "none";
    list.style.display = "flex";
    console.log("clicked");
})