const clockdate = document.getElementById('clock');
const clocktime = document.getElementById('time');

setInterval(function() {
    let date = new Date();

    clockdate.innerHTML = date.toLocaleDateString();
    clocktime.innerHTML = date.toLocaleTimeString();

}, 1000)
