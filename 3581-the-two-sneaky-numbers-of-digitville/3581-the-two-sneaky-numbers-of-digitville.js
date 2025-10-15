/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
     let duplicates = nums.filter((item, index) => nums.indexOf(item) !== index);
duplicates = [...new Set(duplicates)];
return duplicates
};