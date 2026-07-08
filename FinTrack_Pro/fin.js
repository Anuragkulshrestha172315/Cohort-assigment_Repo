const ctx = document.getElementById("myChart");
const add_btn = document.querySelector(".add-btn")
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")
const form = document.querySelector("form")
const tran_data = document.querySelector(".data")

let finTrack = [];

const transactionUi = () =>{
    tran_data.innerHTML = "",
    finTrack.forEach((elem, index) => {
        tran_data.innerHTML += `
        <tr>
                <td>${elem.date}</td>
                <td>${elem.discription}</td>
                <td>${elem.category}</td>
                <td class="green">${elem.amount}</td>
                <td>
                  <button class="edit">Edit</button>
                  <button class="delete-btn">Delete</button>
                </td>
              </tr>
        `
    });
}

add_btn.addEventListener('click', ()=>{
    modal.style.display = "flex"
})
close.addEventListener('click', ()=>{
    modal.style.display = "none"
})

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    const type = event.target[0].value;
    const discription = event.target[1].value;
    const amount = event.target[2].value;
    const date = event.target[3].value;
    const category = event.target[4].value;

    if(
        type.trim() === ""||
        discription.trim() === ""||
        amount.trim() === ""||
        date.trim() === ""||
        category.trim() === ""
    ){
        alert('Enter the Feild')
        return;
    }

    let obj = {
        type,
        discription,
        amount,
        date,
        category
    }
    finTrack.push(obj)
    console.log(finTrack);
    form.reset()
    
     transactionUi()
})

new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Income vs Expenses"],
        datasets: [
            {
                label: "Income",
                data: [25000]
            },
            {
                label: "Expenses",
                data: [5000]
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});