/**
 * Created by dongsj on 2016/11/2.
 */

function getClockAngle(clockTime) {
    var h=clockTime.split(':')[0];
    var m=clockTime.split(':')[1];
    var hAngle=((h>12?(h-12)*5:h*5)+5.0*m/60)*360.0/60;
    var mAngle=(m*360.0/60);
    var absAngle=Math.abs(hAngle-mAngle);
    return absAngle>180?360-absAngle:absAngle;
}
console.log(`${getClockAngle('12:00')}`);
console.log(`${getClockAngle('9:00')}`);
console.log(`${getClockAngle('8:10')}`);
console.log(`${getClockAngle('0:00')}`);
console.log(`${getClockAngle('23:30')}`);