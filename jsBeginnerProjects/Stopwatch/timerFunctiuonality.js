let seconds = 0;
let minutes = 0;
let interval;
const dispalyedSeconds = document.getElementById("seconds")
const dispalyedMinutes = document.getElementById('minutes')




const counting = () => {
   

    if (seconds === 59) {
      
        minutes++;
        dispalyedMinutes.innerHTML = minutes.toString().padStart(2, '0');
        dispalyedSeconds.innerHTML = seconds.toString().padStart(2, '0');
        seconds = 0;
        dispalyedSeconds.innerHTML = seconds.toString().padStart(2, '0');
       

        if (minutes === 59) {
            resetTimer();
        }
    
    }else {
        seconds++; 
        dispalyedSeconds.innerHTML = seconds.toString().padStart(2, '0');
        console.log(minutes + ':' + seconds);
    }
}

const minute = () => {
    minutes += 1;
}



const startTimer = () => {
    interval = setInterval(counting, 500);
    interval
}

const stopTimer = () => {
    clearInterval(interval)

}

const resetTimer = () => {
    clearInterval(interval)
    minutes = 00;
    seconds = 00;
    dispalyedSeconds.innerHTML = seconds.toString().padStart(2, '0');
    dispalyedMinutes.innerHTML = minutes.toString().padStart(2, '0');
}


