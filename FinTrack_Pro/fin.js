const ctx = document.getElementById("myChart");

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