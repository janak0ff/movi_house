// ===================== js for pre loader =================
window.addEventListener("load", (e) => { document.querySelector(".preloading").style.display = "none"; });
// -------------- end pre loader --------------

// ------------ scroll function  ------------
window.onscroll = (e) => {
    // ------------ scroll indicator ------------
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";

    // ------------- scroll up btn show --------------
    (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) ? document.getElementById("scrollup").style.display = "block" : document.getElementById("scrollup").style.display = "none";

    //------------- hide navbar on down scroll and show on up scroll -----------------
    if (prevScrollpos > window.pageYOffset) {
        document.getElementById("navbar").style.display = "block"
        document.querySelector("#myRightSidenav").style.opacity = "1"
        document.querySelector("#mySidenav").style.opacity = "1"
    }
    else {
        document.getElementById("navbar").style.display = "none";
        document.querySelector("#myRightSidenav").style.opacity = "0"
        document.querySelector("#mySidenav").style.opacity = "0"
    }
    prevScrollpos = window.pageYOffset;
}
let prevScrollpos = window.pageYOffset;
// ---------- scroll function end --------------

setTimeout(() => {
    document.querySelector(".window-container").style.display = "block";
}, 10000);

setTimeout(() => {
    document.querySelector(".window-container").style.display = "none";
}, 10500);

setTimeout(() => {
    document.querySelector(".window-container").style.display = "block";
}, 11000);
setTimeout(() => {
    document.querySelector(".window-container").style.display = "none";
}, 11500);

setTimeout(() => {
    document.querySelector(".window-container").style.display = "block";
}, 12000);

// ---------------- clock -------------------
var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('Shrestha')[0];
for (var i = 1; i < 60; i++) {
    clockEl.innerHTML += "<div class='diallines'></div>";
    dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
    var weekday = new Array(7),
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        date = d.getDate(),
        month = d.getMonth() + 1,
        year = d.getFullYear(),
        hDeg = h * 30 + m * (360 / 720),
        mDeg = m * 6 + s * (360 / 3600),
        sDeg = s * 6,
        hEl = document.querySelector('.hour-hand'),
        mEl = document.querySelector('.minute-hand'),
        sEl = document.querySelector('.second-hand'),
        dateEl = document.querySelector('.date'),
        dayEl = document.querySelector('.day'),
        secondE1 = document.querySelector('.current-seconds');
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    var months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]

    var day = days[d.getDay()];
    hEl.style.transform = "rotate(" + hDeg + "deg)";
    mEl.style.transform = "rotate(" + mDeg + "deg)";
    sEl.style.transform = "rotate(" + sDeg + "deg)";
    dateEl.innerHTML = date + "/" + months[d.getMonth()] + "/" + year;
    dayEl.innerHTML = day;
    secondE1.innerHTML = s;
}

setInterval("clock()", 999);
/* digital clock*/
class DigitalClock {
    constructor(element) {
        this.element = element;
    }
    start() {
        this.update();
        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";
        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }

    getTimeParts() {
        const now = new Date();
        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        };
    }
}
const clockElement = document.querySelector(".Kumar");
const clockObject = new DigitalClock(clockElement);
clockObject.start();
// -------------------- end -----------------------