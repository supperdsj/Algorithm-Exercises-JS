/**
 * Created by dongsj on 2016/11/2.
 */
/*
 #数字游戏
 难度：1
 ##描述
 peter喜欢玩数字游戏，但数独这样的游戏对他来说太简单了，于是他准备玩一个难的游戏。游戏规则是在一个N*N的表格里填数，规则：对于每个输入的N，从左上角开始，总是以对角线为起点，先横着填，再竖着填。这里给了一些样例，请在样例中找到规律并把这个N*N的表格打印出来吧。
 ##输入
 多组测试数据（数据量在100组以内）。每组测试数据只有一行为一个整数N（1<=N<=30），表示表格的大小。
 ##输出
 对于每组输入数据，输出N行，为填完的表格（N行，每行N个整数，每个数字之间用空格隔开。
 ##样例输入
 3
 5
 ##样例输出
 1 2 3
 4 6 7
 5 8 9
 1 2 3 4 5
 6 10 11 12 13
 7 14 17 18 19
 8 15 20 22 23
 9 16 21 24 25
 ##来源
 原创

 */

function initMatrix(len){
    var matrixArray=[];
    var i,j;
    var count=1;
    for(i=0;i<len;i++){
        matrixArray.push([]);
    }
    for(i=0;i<len;i++){
        for(j=i;j<len;j++){
            matrixArray[i].push(count++);
        }
        for(j=i+1;j<len;j++){
            matrixArray[j].push(count++);
        }
    }
    for(i=0;i<matrixArray.length;i++){
        matrixArray[i]=matrixArray[i].join(' ');
    }
    return matrixArray.join('\n');
}
console.log(`${initMatrix(3)}`);
console.log(`${initMatrix(5)}`);