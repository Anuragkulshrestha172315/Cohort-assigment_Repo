const btn = document.querySelector("button");
const main = document.querySelector("main");
const overlay = document.querySelector(".overlay")
const box = document.createElement("div");
box.classList.add("box");
const timer = document.querySelector(".timer");

let time = 0;
let interval;

const randomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b}) `;
};

const randomBox = () => {
  box.style.backgroundColor = randomColor();

  main.append(box);

  time += 1;
  timer.innerHTML = time;

  const mainH = main.clientHeight - box.offsetHeight;
  const mainW = main.clientWidth- box.offsetWidth;

  const eY = Math.random() * mainH;
  const eX = Math.random() * mainW;

  box.style.top = `${eY}px`;
  box.style.left = `${eX}px`;
};

btn.addEventListener("click", () => {
  clearInterval(interval);
  randomBox();

  interval = setInterval(() => {
    randomBox();
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
    overlay.style.display = "flex"
  }, 10000);
});
