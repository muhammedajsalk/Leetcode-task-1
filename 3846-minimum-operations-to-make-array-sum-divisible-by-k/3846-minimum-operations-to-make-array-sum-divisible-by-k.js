/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let a=nums.reduce((acc,item)=>acc+=item,0)
    let b=a%k
    return b
};