/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {
    let a = nums[0], b = nums[1], c = nums[2]
    if (!(a + b > c) || !(a + c > b) || !(b + c > a)) return 'none'
    if ([...new Set(nums)].length == 1) return 'equilateral'
    else if ([...new Set(nums)].length == 2) return 'isosceles'
    else return 'scalene'
};
