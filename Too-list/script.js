const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".too-doo");

btn.addEventListener("click", () => {
  const value = inp.value;

  if (value.trim() === "") return;
  todoBox.innerHTML += `
        <div class="li">
  <h1>${value}</h1>
  <div class="btn">
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  </div>
</div>`;
  inp.value = "";
});


todoBox.addEventListener('click',(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.closest(".li").remove();
    }
})
todoBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {

        const task = e.target.closest(".li").querySelector("h1");

        const updatedTask = prompt("Edit Task", task.textContent);

        if (updatedTask !== null && updatedTask.trim() !== "") {
            task.textContent = updatedTask;
        }
    }
});