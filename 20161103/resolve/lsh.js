/**
 * Created by lsh on 2016/11/2
 */

function sort(a, b ,c) {
    if (a > b) {
        if (b > c) {
            return [c,b,a].join(',');
        } else if (c > a) {
            return [b, a, c].join(',');
        } else if (c <= a) {
            return [b, c, a].join(',');
        }
    } else {
        if (a < c) {
            if (c < b) {
                return [a, c, b].join(',');
            } else {
                return [a, b, c].join(',');
            }
        } else {
            return [c, a, b].join(',');
        }
    }
}

console.log(sort(7, 3, 5))