function getNumArr(num){
    var maxNum = Math.pow(num , 2);
    var numArr = [];
    //声明一个二维数组
    for(var j = 1 ; j <= num ; j++){
        numArr[j] = [];
        for(var i = 1 ; i <= num ; i++){
            numArr[j][i] = '';
        }
    }
    for(var i = 1 ; i <= num ; i++){
        getColRow(i,num);
    }
    function getColRow(k,num){
        if(k == 1){
            //第一行
            for(var i = 1 ; i <= num ;i++){
                numArr[1][i] = i;
                console.log('row:'+1, 'col'+i,' numArr[1][i]:'+ numArr[1][i]);
            }
            //第一列
            for(var j = 2 ; j <= num ; j++){
                numArr[j][1] = ++numArr[1][num];
                console.log('row:'+j, 'col:1', 'numArr[j][1]'+numArr[j][1]);
            }
        }else{
            //第k行
            for(var i = k ; i <= num ;i++){
                numArr[k][i] = ++numArr[k-1][num];
                console.log('row:'+k, 'col'+i,' numArr[k][i]:'+ numArr[k][i]);
            }
            //第k列
            for(var j = k+1 ; j <= num ; j++){
                numArr[j][k] = ++numArr[k][num];
                console.log('row:'+j, 'col:'+k, 'numArr[j][k]'+numArr[j][k]);
            }
        }
    }


}
console.log('1',getNumArr(1));
console.log('2' , getNumArr(2));
console.log('3', getNumArr(5));
