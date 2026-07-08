const ctx = document.getElementById("myChart");
const add_btn = document.querySelector(".add-btn")
const modal = document.querySelector(".modal")


add_btn.addEventListener('click', ()=>{
    modal.style.display = "flex"
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