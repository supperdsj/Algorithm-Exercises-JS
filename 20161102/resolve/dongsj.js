/**
 * Created by dongsj on 2016/11/1.
 */
function isNarcissus(testNum){
    if(testNum<100 || testNum>=1000){
        return 'No';
    }
    var n1,n2,n3;
    n1=testNum % 10;
    n2=Math.floor(testNum/10) % 10;
    n3=Math.floor(testNum/100) % 10;
    return (Math.pow(n1,3)+Math.pow(n2,3)+Math.pow(n3,3))==testNum?'Yes':'No';
}
console.log(isNarcissus(153));
console.log(isNarcissus(154));