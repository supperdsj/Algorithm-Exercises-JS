/**
 * Created by dongsj on 2016/11/1.
 */
function sortNumbers(x,y,z){
    if(x>y){
        x=x+y;
        y=x-y;
        x=x-y;
    }
    if(y>z){
        y=y+z;
        z=y-z;
        y=y-z;
    }
    if(x>y){
        x=x+y;
        y=x-y;
        x=x-y;
    }
    return [x,y,z];
}
console.log(`${sortNumbers(7,5,3)}`);