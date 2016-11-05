/**
 * Created by lsh on 2016/11/2
 */

function caculateAngle(time) {
    if (time == "0:00") {
        return '';
    }
    var t = time.split(":");
    var h_angle = t[0]*30 + t[1]/2;
    var m_angle = t[1]*6;
    var angle = h_angle > m_angle? (h_angle-m_angle) : (m_angle-h_angle);

    angle = angle > 180? 360-angle: angle;
    return angle.toFixed(3);
}

console.log(caculateAngle("12:00"));
console.log(caculateAngle("9:00"));
console.log(caculateAngle("8:10"));
console.log(caculateAngle("0:00"));