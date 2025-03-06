function time() {
    var d = new Date();
    var i = d.toLocaleTimeString('US-en', {
        timeZone: 'Asia/Kolkata',
    });
    var ch = d.toLocaleTimeString('US-en', {
        timeZone: 'Asia/Shanghai',
    });

    document.getElementById('india').innerHTML = i;
    document.getElementById('china').innerHTML = ch;
}
time();
setInterval(time, 1000)