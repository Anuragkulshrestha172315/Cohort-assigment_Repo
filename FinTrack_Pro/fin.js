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
const resetAll = document.querySelector(".reset-btn")
const input = document.querySelector(".input")

let finTrack = [];
let updateTransaction = null

const transactionUi = (arr = finTrack) =>{
    tran_data.innerHTML = "",
    arr.forEach((elem, index) => {
        tran_data.innerHTML += `
        <tr>
                <td>${elem.date}</td>
                <td>${elem.discription}</td>
                <td>${elem.category}</td>
                <td class="green">${elem.amount}</td>
                <td>
                  <button onclick = "editTransaction(${elem.id})"  class="edit">Edit</button>
                  <button onclick = "deleteTransaction(${elem.id})" class="delete-btn">Delete</button>
                </td>
              </tr>
        `
    });
    updateCards();

}
resetAll.addEventListener('click', ()=>{
    finTrack = [];

    transactionUi();
    updateCards();

    myChart.data.datasets[0].data = [0];
    myChart.data.datasets[1].data = [0];
    myChart.update();
})
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
    id: Date.now(),
    type,
    discription,
    amount,
    date,
    category
    }
    if(updateTransaction!=null){
        finTrack[updateTransaction] = obj;
        updateTransaction = null
    }else{
        finTrack.push(obj)
    }
    transactionUi();
    console.log(finTrack);
    form.reset()
    
    modal.style.display = "none"

})

const myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Income vs Expenses"],
        datasets: [
            {
                label: "Income",
                data: [0]
            },
            {
                label: "Expenses",
                data: [0]
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

    myChart.data.datasets[0].data = [totalIncome];
    myChart.data.datasets[1].data = [totalExpense];
    myChart.update();
}
const editTransaction = (id) => {
    modal.style.display = "flex";  
    updateTransaction = finTrack.findIndex(item => item.id === id);
    tran = finTrack.find(elem => elem.id === id);
    tran = finTrack[updateTransaction];
    form[0].value = tran.type;
    form[1].value = tran.discription;
    form[2].value = tran.amount;
    form[3].value = tran.date;
    form[4].value = tran.category;
}

const deleteTransaction  = (index) =>{
    finTrack.splice(index,1)
    transactionUi();
}

input.addEventListener('input',()=>{
    const value = input.value.toLowerCase();
    const filterTransaction = finTrack.filter(searchTransaction =>
        searchTransaction.discription.toLowerCase().includes(value) || searchTransaction.type.toLowerCase().includes(value)
    )
    transactionUi(filterTransaction)
})
