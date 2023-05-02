let spanHours = document.querySelector(".hours");
let spanMinutes = document.querySelector(".minutes");
let spanSeconds = document.querySelector(".seconds");
let btn = document.querySelector(".btn");
let clockBox = document.querySelector(".clock-box");
let btnCircle = document.querySelector(".btn-circle");
function interval() {
    date = new Date();
    spanHours.innerHTML = date.getHours();
    spanMinutes.innerHTML = date.getMinutes();
    spanSeconds.innerHTML = date.getSeconds();
    if (Number(spanMinutes.innerHTML) <= 9) {
        spanMinutes.innerHTML = `0${spanMinutes.innerHTML}`;
    }
    if (Number(spanSeconds.innerHTML) <= 9) {
        spanSeconds.innerHTML = `0${spanSeconds.innerHTML}`;
    }
}

setInterval(interval, 1000);
btn.addEventListener("click", toggleTheme);
function toggleTheme() {
    let container = document.querySelector(".clock-container");
    if (container.classList.contains("dark-theme")) {
        container.classList.remove("dark-theme");
        btnCircle.classList.remove("white-theme");
        btn.classList.remove("dark-theme");
        container.classList.add("white-theme");
        btnCircle.classList.add("dark-theme");
        btn.classList.add("white-theme");
        clockBox.style = "color: black";
        btnCircle.style = "left: 34px";
    } else {
        container.classList.remove("white-theme");
        btnCircle.classList.remove("dark-theme");
        btn.classList.remove("white-theme");
        container.classList.add("dark-theme");
        btnCircle.classList.add("white-theme");
        btn.classList.add("dark-theme");
        clockBox.style = "color: white";
        btnCircle.style = "left: -1px";
    }
}
