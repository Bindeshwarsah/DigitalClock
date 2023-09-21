function showTime(){
    var date=new Date();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var sec=date.getSeconds();
    var session="AM";
    if(hours==0){
        hours=12;
    }
    else if(hours>12){
        hours=hours-12;
        session="PM";
    }
    hours=(hours<10?"0"+hours:hours);
    minutes=(minutes<10?"0"+minutes:minutes);
    sec=(sec<10?"0"+sec:sec);
    document.getElementById("digitalClock").innerHTML=hours+":"+minutes+":"+sec+session;
    setTimeout(showTime,1000);

}
showTime();
