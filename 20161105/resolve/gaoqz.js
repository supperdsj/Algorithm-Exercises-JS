/**
 * Created by gaoqz on 16/11/3.
 */

function printSudokuTable (num) {
    var sud = new Array();
    var fir = 1;
    sud.length = num;

    //初始二维数组
    for (var i=0; i< num; i++) {
        sud[i] = new Array();
        sud[i].length = num;
    }

    //数组赋值
    for (var i=0; i< num; i++) {
        for (var j=i; j< num; j++) {
            sud[i][j] = fir++;
        }
        for (var k=i+1; k< num; k++) {
            sud[k][i] = fir++;
        }
    }

    //输出
    for (var i=0; i<sud.length; i++) {
        console.log(sud[i].join('  '));
    }
}

printSudokuTable(3);
printSudokuTable(5);
