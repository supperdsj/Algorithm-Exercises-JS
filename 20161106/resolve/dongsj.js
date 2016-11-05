/**
 * Created by dongsj on 2016/11/2.
 */

var a = '((1+2)*5+1)/4';
var b = '1.000+2/4';
function resolveStr(str) {
    str = str.replace('+', '!+').replace('-', '!-').replace('*', '!*').replace('/', '!/');
    while (str.indexOf('(') >= 0) {
        var subStr = getSubStrByBrackets(str);
        str = str.replace(subStr, resolveAllOperator(subStr.replace('(', '').replace(')', '')))
    }
    str = resolveAllOperator(str);
    str = formats(str, '+');
    str = formats(str, '-');
    str = formats(str, '*');
    str = formats(str, '/');
    return str;
}
function getSubStrByBrackets(str) {
    var leftStart = str.lastIndexOf('(');
    var rightStart = leftStart + str.substring(leftStart, str.length).indexOf(')') + 1;
    return str.substring(leftStart, rightStart);
}
function resolveAllOperator(str) {
    str = resolveSingleOperator('*', str);
    str = resolveSingleOperator('/', str);
    str = resolveSingleOperator('+', str);
    str = resolveSingleOperator('-', str);
    return str;
}
function resolveSingleOperator(operator, str) {
    while (str.indexOf('!' + operator) >= 0) {
        var tempA = str.split('!' + operator);
        var tempB = tempA[1].split('!');
        tempB[0] = tempB[0] + ' ' + operator;
        tempA[1] = tempB.join('!');
        var result = tempA[0] + ' ' + tempA[1];
        for (var i = 2; i < tempA.length; i++) {
            result += '!' + operator + tempA[i];
        }
        str = result;
    }
    return str;
}
function formats(str, operator) {
    return str.split(' ' + operator).join(operator).split(operator + ' ').join(operator).split(operator).join(' ' + operator + ' ');
}
// function resolveStr(str) {
//     var oStack = [];
//     var result = '';
//     var o1 = ['+', '-'];
//     var o2 = ['*', '/'];
//     var oFlag = 0;
//     var cFlag = false;
//     for (var i = 0; i < str.length; i++) {
//         cFlag = false;
//         for (var j = 0; j < o1.length; j++) {
//             if (str[i] == o1[j]) {
//                 oStack.push(str[i]);
//                 cFlag = true;
//                 if (oFlag > 1) {
//                     popStacks();
//                 } else {
//                     oFlag = 1;
//                 }
//             }
//         }
//         for (j = 0; j < o2.length; j++) {
//             if (str[i] == o2[j]) {
//                 oStack.push(str[i]);
//                 oFlag = 2;
//                 cFlag = true;
//             }
//         }
//         if (!cFlag) {
//             if (str[i] == ')') {
//                 popStacks();
//             } else if (str[i] != '(') {
//                 result = result + ' ' + str[i];
//             }
//         }
//     }
//     popStacks();
//     return result;
//     function popStacks() {
//         oFlag = 0;
//         result = result + ' ' + oStack.pop();
//     }
// }
console.log(resolveStr(b));
console.log(resolveStr(a));