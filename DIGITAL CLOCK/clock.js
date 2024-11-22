const time = document.getElementById('time');

setInterval(function () {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString()
},2000);