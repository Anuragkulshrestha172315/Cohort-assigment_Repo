const dark = document.querySelector(".dark");
const main = document.querySelector("main");
const nav = document.querySelector("nav");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const form = document.querySelector("form")
const cross = document.querySelector(".crosses")
const add = document.querySelector(".add")
const taskDiv = document.querySelector(".allTask")
const totalTask = document.querySelector(".total h2");
const completeTask = document.querySelector(".complete h2");
const pendingTask = document.querySelector(".pending h2");
const dueTask = document.querySelector(".due h2");

let taskArr = [];
let updateindex = null
let ui=()=>{
    taskDiv.innerHTML ="";
    taskArr.forEach((elem,index)=>{
        taskDiv.innerHTML += `<div class="task">
                        <input id="checkBox" type="checkbox">
                        <div class="category"><p>${elem.category}</p></div>
                        <div class="title">
                            <h1>${elem.taskTitle}</h1>
                            <p>${elem.aboutTask}</p>
                            <p> <i class="ri-calendar-line"></i>${elem.date}</p>
                        </div>
                        <div class="btn">
                            <button id="view">View Task <i class="ri-arrow-down-s-line"></i></button>
                            <button onclick = "updateTask('${elem.taskTitle}')" id="edit"><i class="ri-pencil-ai-2-line"></i></button>
                            <button onclick = "deleteTask('${index}')"  id="delete"><i class="ri-delete-bin-5-line"></i></button>
                        </div>
                    </div>`
    })
    updateState();
    
}

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
    let date = event.target[3].value;

    if(category.trim() ==="" || taskTitle.trim() === "" || aboutTask.trim() === "" || date.trim() === ""){
        alert("Please Enter the all feild!")
        return;
    }
    
    let obj = {
        category,
        taskTitle,
        aboutTask,
        date
    }
    if(updateindex != null){
        taskArr[updateindex] = obj;
        updateindex = null
    }else{
        taskArr.push(obj)
    }
    ui();
    console.log(taskArr);
    form.reset();
    form.style.display = "none"

})

const updateTask = (name) => {
    form.style.display = "flex"
    let task = taskArr.find((elem)=> elem.taskTitle === name)
    updateindex = taskArr.findIndex((elem)=> elem.taskTitle === name)
    form[0].value = task.category
    form[1].value = task.taskTitle
    form[2].value = task.aboutTask
    form[3].value = task.date

}

const deleteTask = (index)=>{
    taskArr.splice(index,1)
    ui()
}


const updateState = ()=>{
    let total = taskArr.length;

    let complete = taskArr.filter(task => task.complete).length
    let pending = total - complete;
    let today = new Date()

    let due = taskArr.filter(task=>{
        return !task.complete && new Date(task.Date) < today;
    }).length;

    totalTask.textContent = total;
    completeTask.textContent = complete;
    pendingTask.textContent = pending;
    dueTask.textContent = due;

}