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

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let category = event.target[0].value;
    let taskTitle = event.target[1].value;
    let aboutTask = event.target[2].value;
    let date = event.target[4].value;

    if(category.trim() ==="" || taskTitle.trim() === "" || aboutTask.trim() === "" || date.trim() === ""){
        alert("Please Enter the all feild!")
    }
    
    let obj = {
        category,
        taskTitle,
        aboutTask,
        date
    }
    console.log(obj);
    

})