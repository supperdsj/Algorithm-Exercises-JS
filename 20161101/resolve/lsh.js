function getAllPeach(day) {
    var peaches = 1;
    for (var i=0; i< day; i++) {
        peaches = (peaches + 1)*2;
    }
    return peaches;
}

console.log("2组测试数据-----");
console.log("输入的天数：3");
console.log("输入的天数：11");

console.log("------------");

console.log("桃子总数：", getAllPeach(3));
console.log("桃子总数：", getAllPeach(11))