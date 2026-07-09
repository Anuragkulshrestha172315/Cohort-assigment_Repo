const ctx = document.getElementById("myChart");
const add_btn = document.querySelector(".add-btn")
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")
const form = document.querySelector("form")
const tran_data = document.querySelector(".data")
const balance = document.querySelector(".balance");
const income = document.querySelector(".income");
const expense = document.querySelector(".expense");
const transaction = document.querySelector(".transaction")

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
    updateCards();

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
    modal.style.display = "none"

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

const updateCards = () => {

    let totalIncome = 0;
    let totalExpense = 0;

    finTrack.forEach(item => {
        if(item.type === "Income"){
            totalIncome += Number(item.amount);
        }else{
            totalExpense += Number(item.amount);
        }
    });

    if(balance) balance.textContent = `₹${totalIncome-totalExpense}.00`;
    if(income) income.textContent = `₹${totalIncome}.00`;
    if(expense) expense.textContent = `₹${totalExpense}.00`;
    if(transaction) transaction.textContent = finTrack.length;
}
