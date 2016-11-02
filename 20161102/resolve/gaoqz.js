/**
 * Created by gaoqz on 16/11/2.
 */

function isEqualNarcissusCount (num) {
    var n = '' + num;
    return (Math.pow(n[0],3) + Math.pow(n[1],3) + Math.pow(n[2],3)) == num ? 'Yes':'No';
}

console.log(isEqualNarcissusCount(153));
console.log(isEqualNarcissusCount(154));
console.log(isEqualNarcissusCount(150));
