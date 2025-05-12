/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
   const newArr=nums.filter((item)=>nums.indexOf(item)===nums.lastIndexOf(item))
   const fun=newArr.reduce((acc,item)=>acc+=item,0)
   return fun
};