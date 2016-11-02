/**
 * Created by lixu on 16/11/2.
 */
//判断 nums 是不是水仙花数  每组测试数据以包含一个整数n(100<=n<1000)


// Math.Pow(double a,double b)
// 返回指定数字的指定次幂。
function count(nums){
    if(nums == 0){
        return false;
    }
    if(nums>=1000 || nums<100){
        return 'No';
    }
    if(Math.Pow(nums[0]/100,3)+Math.Pow(nums[1]/10,3)+Math.Pow(nums[2],3) == nums ){
        return 'yes';
    }else{
        return 'No';
    }
}
count(153);
