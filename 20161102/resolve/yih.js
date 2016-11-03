function isNarcissisticNumber(num){

    if(num.toString().length < 3 || num.toString().length > 3 || isNaN(num)){
        return console.log('请输入一个三位数,并且是数字');
    }else{
        var firstNum = (num%100)%10;
        var twoNum = (num%100 - firstNum)/10;
        var threeNum = (num - num%100)/100;
        if( Math.pow( firstNum , 3 ) + Math.pow( twoNum , 3 ) + Math.pow( threeNum , 3 ) == num){
            return console.log(num + '是一个水仙花数 , yes' );
        }else{
            return console.log(num + '不是一个水仙花数 , no');
        }
    }

}

console.log('123' ,isNarcissisticNumber(123));
console.log('111' ,isNarcissisticNumber(111));
console.log('abc' ,isNarcissisticNumber('abc'));
console.log('1234' ,isNarcissisticNumber(1234));
console.log('1' ,isNarcissisticNumber(1));
console.log('153' ,isNarcissisticNumber(153));

