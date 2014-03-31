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
    document.getElementById("timer").innerHTML = "Time remaining: " + currentMinutes + ":" + currentSeconds;
    //seconds hits zero and player has yet to start game give them default setup
    if(secs == 0 && document.getElementById("timer").style.display != 'none') gameStartOnTimeout();
    if(secs !== -1) setTimeout('Timer()',1000);
}