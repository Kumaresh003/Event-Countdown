var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var overlay = document.querySelector(".overlay");
var fun = document.querySelector(".event");
var add_event = document.getElementById("add_event");
var cancel = document.getElementById("cancel");
var save = document.getElementById("save");
var data = document.getElementById("information-1");
var date = document.getElementById("information-2");
var wish = document.querySelector(".wish");

add_event.addEventListener("click", function () {
    console.log('hello');
    alert("hello");
    overlay.style.display = "block";
    fun.style.display = "block";

    
})

cancel.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.style.display = "none";
    fun.style.display = "none";
})

function sav(event) {
    event.preventDefault();
    wish.textContent = data.value;
    overlay.style.display = "none";
    fun.style.display = "none";
    setInterval(update, 1000);
}



function update() {
    // const cureentyear = new Date().getFullYear();

    // const newyear = new Date(`Januray 1 ${cureentyear + 1} 00:00:00`);
    // const currentdate = new Date();

    // const different = newyear - currentdate;

    // const d = Math.floor(different / 1000 / 60 / 60 / 24);
    // const h = Math.floor((different / 1000 / 60 / 60) % 24);
    // const m = Math.floor((different / 1000 / 60) % 60);
    // const s = Math.floor((different / 1000) % 60);

    const a = new Date(`${date.value} 00:00:00`) ;
    const b = new Date();
    const res = a - b;
    const d = Math.floor(res / 1000 / 60 / 60 / 24);
    const h = Math.floor((res / 1000 / 60 / 60) % 24);
    const m = Math.floor((res/ 1000 / 60) % 60);
    const s = Math.floor((res/ 1000) % 60);

    days.innerHTML = d < 10 ? "0" + d : d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
}


