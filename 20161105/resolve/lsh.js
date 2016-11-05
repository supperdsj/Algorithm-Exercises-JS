/**
 * Created by lsh on 2016/11/2
 */

function numOrder(col_num) {
    var b = [];
    for (var i=0; i< col_num; i++) {
        b[i] = [];
        for (var j=0; j< col_num; j++) {
            b[i][j] = 0;
        }
    }

    var value = 0;
    for (var i=0; i< col_num; i++) {
        for (var j=i; j< col_num; j++) {
            value = value + 1;
            b[i][j] = value;
        }
        for (var m=i+1; m< col_num; m++) {
            value = value + 1;
            b[m][i] = value;
        }
    }
    for (var m=0; m < b.length; m++) {
        console.log(b[m].join(" "));
    }
}
numOrder(3);
console.log('------');
numOrder(5);