/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const newNum=nums.filter(item=>nums.indexOf(item)===nums.lastIndexOf(item))
    return newNum[0]
};