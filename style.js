const hour = document.querySelector(".hour");
const minut = document.querySelector(".minut");
const second = document.querySelector(".second");

const correntHour = document.querySelector(".correntHour");
const correntMinut = document.querySelector(".correntMinut");
const correntSecond = document.querySelector(".correntSecond");


const start = document.querySelector(".start");
const saveBtn = document.querySelector(".saveBtn");

let h = 0;
let m = 0;
let s = 0;
let allTime = 0;

let currentInterval = null;
let isStarted = false;

saveBtn.addEventListener("click", () => {
    h = hour.value;
    m = minut.value;
    s = second.value;
    allTime = h * 3600 + m * 60 + s;
    correntHour.textContent = `${h < 10 ? "0" + h : h}`;
    correntMinut.textContent = `${m < 10 ? "0" + m : m}`;
    correntSecond.textContent = `${s < 10 ? "0" + s : s}`;
});

start.addEventListener("click", () => {
    if (!isStarted) {
        start.textContent = "PAUSE";
        start.classList.add("pause");
        start.classList.remove("start");
        res();
    } else {
        start.textContent = "START";
        start.classList.add("start");
        start.classList.remove("pause");

        clearInterval(currentInterval);
    }
    isStarted = !isStarted;
});

function res() {
    currentInterval = setInterval(() => {
        if (s == 0 && m == 0 && h == 0) {
            start.textContent = "START";
            start.classList.add("start");
            start.classList.remove("pause");
            clearInterval(currentInterval);
        }
        if (s == 0 && m == 0 && h - 1 >= 0) {
            h = h - 1;
            m = 60;
            s = 60;
            correntHour.textContent = `${h < 10 ? "0" + h : h}`;
        }
        if (s == 0 && m - 1 >= 0) {
            m = m - 1;
            s = 60;
            correntMinut.textContent = `${m < 10 ? "0" + m : m}`;
        }
        correntSecond.textContent = `${s < 10 ? "0" + s : s}`;
        s--;
        // alert('Time is finished')
    }, 1000);
}