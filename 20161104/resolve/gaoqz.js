/**
 * Created by gaoqz on 16/11/2.
 */

function getAngle (time) {
    var d = time.split(':');
    var angle = (360/60)*d[1] - (360/12*d[0] + 360/12/60*d[1]);
    return angle >=0 && angle <= 180 ? angle.toFixed(3):Math.abs(angle + 360).toFixed(3);
}

console.log(getAngle('12:00'));
console.log(getAngle('9:00'));
console.log(getAngle('8:10'));
console.log(getAngle('0:00'));
console.log(getAngle('23:30'));
