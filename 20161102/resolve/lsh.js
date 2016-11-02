/**
 * Created by lsh on 2016/11/2
 */

function isNarcissisticNumber(number) {
    if (number == 0) {
        return '';
    }
    var reg = /^[1-9][0-9]{2}$/;
    if (reg.test(number)) {
        var str = number + "";
        return Math.pow(str[0], 3) + Math.pow(str[1], 3) + Math.pow(str[2], 3) == number ? 'Yes' : 'No';
    } else {
        return "No";
    }
}

console.log(isNarcissisticNumber(153));
console.log(isNarcissisticNumber(154));
console.log(isNarcissisticNumber(0));