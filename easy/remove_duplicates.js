/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  newNums = [...new Set(nums)];
  nums.splice(0, 0, ...newNums);

  return newNums.length;
};
