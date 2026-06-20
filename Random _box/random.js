const btn = document.querySelector("button");
const main = document.querySelector("main");
const box = document.querySelector(".box");

btn.addEventListener('click', ()=>{

    const eY =  Math.random() * 100;
    const eX =  Math.random() * 100;


    box.style.top = `${eY}%`
    box.style.left = `${eX}%`
}) 