var tens=0;
var seconds=0;
var Appendtens=document.getElementById("tens");
var Appendseconds=document.getElementById("seconds");
var Startbtn=document.getElementById("Start-button");
var Stopbtn=document.getElementById("Stop-button");
var Resetbtn=document.getElementById("Reset-button");
var interval;
function StartInterval(){
    tens++;
    if(tens<9){
        Appendtens.innerHTML="0"+tens;
    }
    if(tens>9){
        Appendtens.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        Appendseconds.innerHTML="0"+seconds;
        tens=0;
        Appendtens.innerHTML="0"+tens;
    }
    if(seconds>9){
        Appendseconds.innerHTML=seconds;
    }
}
Startbtn.onclick=function(){
    interval=setInterval(StartInterval);
}
Stopbtn.onclick=function(){
    clearInterval(interval);
}
Resetbtn.onclick=function(){
    clearInterval(interval);
    tens=0;
    seconds=0;
    Appendseconds.innerHTML="0"+seconds;
    Appendtens.innerHTML="0"+tens;
}
