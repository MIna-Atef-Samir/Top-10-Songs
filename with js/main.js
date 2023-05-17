let btn = document.querySelector(".btn");
let list = document.querySelector(".list");
let two = document.querySelector(".two");
let ddclose = document.querySelector(".close")

btn.addEventListener("click", () => {
    two.style.display = "none";
    list.style.display = "flex";

    console.log("clicked");
})

ddclose.addEventListener("click", ()=>{
    two.style.display = "block";
    list.style.display = "none";
})