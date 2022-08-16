
let displyedSec = document.getElementById("sec")
let displyedMin = document.getElementById('min')
let displyedHours = document.getElementById('hours')



setInterval(() => {

    let date = new Date;
    let h = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    
    displyedMin.innerHTML = min.toString().padStart(2, '0');
    displyedSec.innerHTML = sec.toString().padStart(2, '0');
    displyedHours.innerHTML = h.toString().padStart(2, '0')

}, 1000);
