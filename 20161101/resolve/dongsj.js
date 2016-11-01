/**
 * Created by dongsj on 2016/11/1.
 */
function getPeachCountYesterday(todayCount){
    return (todayCount+1)*2;
}
function getPeachCountByDays(dayCount){
    var peachCount=1;
    for (var i=0;i<dayCount;i++){
        peachCount=getPeachCountYesterday(peachCount);
    }
    return peachCount;
}
console.log(getPeachCountByDays(3));
console.log(getPeachCountByDays(11));