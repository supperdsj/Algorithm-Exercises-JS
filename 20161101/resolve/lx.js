/**
 * Created by lixu on 16/11/1.
 */

// x x/2+1  (x/2+1)/2+1   m天    1    m<29天

// 3
// 11
var  m=0;
function nums(num){
    for(m=0;m<num;m++){
        var numNow = 1; //桃子的个数
        numNow=(numNow+1)*2;
    }
    return numNow;
}
nums(3);

function nums(num){
    for(m=0;m<num;m++){
        var numNow = 1;
        numNow=(numNow+1)*2;
    }
    return numNow;
}
nums(11);


