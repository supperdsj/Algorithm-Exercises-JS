/**
 * Created by gaoqz on 16/11/2.
 */
function getPeaches (d) {
    var peaches = 1;
    for (var i = 0; i < d; i++) {
        peaches = (peaches + 1) * 2
    }
    return peaches;
}

console.log('2天，桃子总数为：', getPeaches(2));
console.log('3天，桃子总数为：', getPeaches(3));
console.log('11天，桃子总数为：', getPeaches(11));
