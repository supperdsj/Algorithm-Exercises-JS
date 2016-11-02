/**
 * Created by yihuan on 2016/11/2.
 */


function getPeachNum(days){
    var peachNum = 1;

    if(days == 0){
        return peachNum = 0;
    }else if(days == 1){
        console.log('猴子还没吃那！！让他吃几天吧，再算吧！');
    }else if(1 < days && days< 29){

        for(var i = 0 ; i < days ; i++){
            peachNum = peachNum*2+2;
        }
        return peachNum;

    }else{
       console.log('不能在吃了，猴子要撑死了');
    }

}
console.log('0天',getPeachNum(0));
console.log('1天',getPeachNum(1));
console.log('2天',getPeachNum(2));
console.log('3天',getPeachNum(3));
console.log('4天',getPeachNum(4));
console.log('28天',getPeachNum(28));
console.log('29天',getPeachNum(29));
