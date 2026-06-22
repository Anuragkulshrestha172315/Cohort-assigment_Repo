const dark = document.querySelector(".dark");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const form = document.querySelector("form")
const cross = document.querySelector(".crosses")
const add = document.querySelector(".add")

let taskArr = [];

add.addEventListener('click',()=>{
    form.style.display = "flex"
})

cross.addEventListener('click',()=>{
    form.style.display = "none"
})


dark.addEventListener('click', ()=>{
    main.classList.toggle('bright')
    nav.classList.toggle('bright')
    left.classList.toggle('bright')
    if(right.classList.toggle('bright')){
        nav.style.color = "black"
    }
    main.classList.toggle('bright')
})