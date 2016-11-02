/**
 * Created by gaoqz on 16/11/2.
 */

//for 循环
function sort(a,b,c) {
    if (a > b) {
        if (a > c) {
            if (b > c) {
                return [c,b,a].join(',');
            } else {
                return [b,c,a].join(',');
            }
        } else {
            return [b,a,c].join(',');
        }
    } else {
        if (b > c) {
            if (a > c) {
                return [c,a,b].join(',');
            } else {
                return [a,c,b].join(',');
            }
        } else {
            return [a,b,c].join(',');
        }
    }
}

console.log(sort(7,3,5));

//数组排序
function Sort(a,b,c) {
    return [a,b,c].sort(function (i,j) {return i - j;}).join(',');
}
console.log(Sort(7,3,5));
