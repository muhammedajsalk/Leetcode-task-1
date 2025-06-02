/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const set =new Set(nums).size!=nums.length
    return set
};