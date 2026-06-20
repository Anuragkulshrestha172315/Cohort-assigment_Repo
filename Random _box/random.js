const btn = document.querySelector("button");
const main = document.querySelector("main");
const box = document.querySelector(".box");
const timer = document.querySelector(".timer");

let time = 0;
let interval;
const randomBox =()=>{
    time += 1;
    timer.innerHTML = time;

    const eY = Math.random() * 100;
    const eX = Math.random() * 100;

    box.style.top = `${eY}%`;
    box.style.left = `${eX}%`;
}

btn.addEventListener("click", () => {
    clearInterval(interval);
    
   interval = setInterval(() => {
    randomBox()
    
  }, 1000);

  setTimeout(() => {
    clearInterval(interval)
  }, 10000);
});
