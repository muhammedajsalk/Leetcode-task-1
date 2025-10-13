/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
    a=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]%2==0){
            a.push(0)
        }else{
            a.push(1)
        }
    }
    return a.sort((a,b)=>a-b)
};