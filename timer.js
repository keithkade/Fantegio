var mins = 5;
var secs = mins * 60;
var currentSeconds = 0;
var currentMinutes = 0;
setTimeout('Timer()',1000);

function Timer() {
	currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;
    if(currentSeconds <= 9) currentSeconds = "0" + currentSeconds;
    secs--;
    document.getElementById("timer").innerHTML = currentMinutes + ":" + currentSeconds;
    if(secs !== -1) setTimeout('Timer()',1000);
}