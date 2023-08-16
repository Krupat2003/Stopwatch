var seconds = "00";
var tens = "00";
var OutputSeconds = document.getElementById("seconds");
var OutputTens = document.getElementById("tens");
var bottonStart = document.getElementById("btn-start");
var bottonStop = document.getElementById("btn-stop");
var bottonReset= document.getElementById("btn-reset");
var Interval;

bottonStart.addEventListener("click", () => {
        clearInterval(Interval);
        Interval =setInterval(startTime, 10);
});

bottonStop.addEventListener("click", () => {
    clearInterval(Interval);
});

bottonReset.addEventListener("click", () => {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    OutputSeconds.innerHTML = seconds;
    OutputTens.innerHTML =tens;
});

function startTime(){
    tens++;
    if(tens <= 9){
        OutputTens.innerHTML = "0" + tens;
    }
    
    if(tens > 9){
        OutputTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        OutputTens.innerHTML = "0" + tens;
        tens = 0;
        OutputTens.innerHTML = "0" + tens;
    }

    if(seconds > 9){
        OutputSeconds.innerHTML = seconds;
    }


}