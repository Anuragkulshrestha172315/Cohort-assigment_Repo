const inp = document.querySelector("input")
const btn = document.querySelector("#add")
const todoBox = document.querySelector('.too-doo')


btn.addEventListener('click',()=>{
    const value = inp.value;

    if(value.trim() === "") return;
    todoBox.innerHTML += `
        <div class="li">
          <h1>${value}</h1>
          <div class="btn">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>`
    inp.value = ""
})
