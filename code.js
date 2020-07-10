//    define some important variables:
    var mode = false; //App Mode
    var interval; //    interval = setInterval(timer1, 10);
    var interval2; //    interval2 = setInterval(timer2, 10);
    var lapDetails = [];
    
    var timeMin = 0, timeSec = 0, timeMilisec = 0;
    var lapMin = 0, lapSec = 0, lapMilisec = 0;
    
//    on app load show start and lap buttons:
//    hideShowButtons("#start", "#lapButton");
hideshow([0],[3]);
    
//    When click on start button, App mode is on and show stop and lap buttons and start the counters:
    function startTimes(){
        mode = true;
        hideshow([1],[3]);
    }
    
//    When click on the stop button, show the resume and reset buttons and stop the counters;
    function stop(){
        clearInterval(interval);
        clearInterval(interval2);
        hideshow([2],[4]);
    }
    
//    When click on the resume button, show the stop and lap buttons and resume the counters;
    function resume(){
        hideshow([1],[3]);
    }
    
//    When click on the reset button, the app reloads:
    function reset(){
    location.reload();
    }
    
//    When click on the lap button, Stop the counter, reset lap counter and print lap details in the lap div and again start counter;
    function lap(){
        if(mode){
            lapDetails.push('<div class = "codeLapDiv">' + 
            '<div class = "codeLapTitle">' + 'Lap' + (lapDetails.reverse().length+1) + '</div>' +
            '<div class = "codeLapTime">' + '<span>' + format(lapMin) + '</span>:' + '<span>' + format(lapSec) + '</span>.' + '<span id="codeLapMilisec">' + format(lapMilisec) + '</span>' + '</div>' + 
            '</div>');
            lapDetails.reverse();
            document.getElementById("lapsDiv").innerHTML = lapDetails.join(' ');
            
            lapMin = 00;
            document.getElementById("lapMin").innerHTML = '00';
            lapSec = 00;
            document.getElementById("lapSec").innerHTML = '00';
            lapMilisec = 00;
            document.getElementById("lapMilisec").innerHTML = '00';
        }
    }
    
    
    
//    functions:
function hideshow(x, y){
    var hideshow = document.getElementsByClassName("buttons");
    for(var i = 0; i <= hideshow.length; i++){
        hideshow[i].style.display = "none";
        hideshow[x].style.display = "inline-block";
        hideshow[y].style.display = "inline-block";
    }
}
//    function for counter:
    function timer1(){
        timeMilisec++;
        document.getElementById("timeMilisec").innerHTML= format(timeMilisec);
        
        if(timeMilisec >= 100){
            timeSec++;
            document.getElementById("timeSec").innerHTML = format(timeSec);
            timeMilisec = 0;
        }
        else if(timeSec >= 60){
            timeMin++;
            document.getElementById("timeMin").innerHTML = format(timeMin);
            timeSec = 0;
        }
    }
    
    function timer2(){
        lapMilisec++;
        document.getElementById("lapMilisec").innerHTML = format(lapMilisec);
        
        if(lapMilisec >= 100){
            lapSec++;
            document.getElementById("lapSec").innerHTML = format(lapSec);
            lapMilisec = 0;
        }
        else if(lapSec >= 60){
            lapMin++;
            document.getElementById("lapMin").innerHTML = format(lapMin);
            lapSec = 0;
        }
    }
    
//    function for formatting numbers:
    function format(number){
        if(number < 10){
            return '0' + number;
        }
        else{
            return number;
        }
    }

