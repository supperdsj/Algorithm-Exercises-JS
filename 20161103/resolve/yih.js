function lowToHeightsort(oneNum , twoNum , threeNum){



    if(oneNum >= twoNum){
        if(oneNum >= threeNum){
            console.log('one:'+oneNum);
            if(twoNum >= threeNum){
                console.log('two'+twoNum);
                console.log('three'+threeNum);
            }else{
                console.log('two'+threeNum);
                console.log('three'+twoNum);
            }
        }else{
            console.log('one'+ threeNum);
            console.log('two' + oneNum);
            console.log('three'+twoNum);
        }
    }else if(twoNum < threeNum){
        console.log('one'+threeNum);
        console.log('two'+twoNum);
        console.log('three'+oneNum);
    }



}
console.log('1,2,3',lowToHeightsort(1,2,3));
console.log('3,2,3',lowToHeightsort(3,2,3));