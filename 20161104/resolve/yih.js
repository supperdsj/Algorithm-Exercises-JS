function getTimeAngle(timeStr){
    var hour = timeStr.split(':')[0];
    var minute = timeStr.split(':')[1];
    var hourAngle = 360/12;
    var minuteAngle = 360/60;

    if(hour > 12){
        hour = hour % 12;
    }
    //每两分钟时钟指针走1度 1:12
    console.log('hour'+(hour * hourAngle + minute/2));
    console.log('hour'+minuteAngle*minute);


    if(hour * hourAngle >= minuteAngle*minute){
       var angule = (hour * hourAngle + minute/2) - minuteAngle*minute;

    }else{
        var angule = minuteAngle*minute - (hour * hourAngle + minute/2);
    }


    if(angule >=180){
        console.log(360 - angule);
    }else{
        console.log(angule);
    }


}
console.log('8:10', getTimeAngle('8:10'));
console.log('20:10', getTimeAngle('20:10'));