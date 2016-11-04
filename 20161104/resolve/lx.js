/**
 * Created by lixu on 16/11/2.
 */
//时间戳
// #小胖子的时钟
// 难度：1
// ##描述
// 小胖子特别喜欢时钟，收藏了各种各样的时钟在家里，所以他知道无论哪个时候的角度，不信你可以考考他！
// ##输入
// 有多组测试数据h：m,1<=h<=12,00<=m<=59;已0:00为结束
// ##输出
// 输出最小的角度在[0,180]间，并且保留三位小数！
// ##样例输入
// 12:00
// 9:00
// 8:10
// 0:00
// ##样例输出
// 0.000
// 90.000
// 175.000
// ##来源
// 原创
// Math.abs( x ),返回一个数字的绝对值   Math.Round(526.925, 3);四舍五入
function angle(clock){
    h_clock = clock.split(":");
    hour = h_clock[0]*30+h_clock[1]/2.0;//小时走得角度
    minute = h_clock[1]*6.0;//分钟走的角度
    angle = Math.abs(hour-minute);
    if(angle>180){
        angle = 360-angle;
    }else{
        angle;
    }
    return round(angle,"#.000");

}
console.log(angle('12:00'));



