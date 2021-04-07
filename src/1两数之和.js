/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[]}
 */
var twoSum = function (nums, target) {
    let map = new Map();
    let len = nums.length
    for (let i = 0; i < len; i++) {
        // 提取共用
        let other = target - nums[i]
        // 判断是否符合条件，返回对应的下标
        if (map.has(other)) return [map.get(other), i];
        // 不符合的存入hash表
        map.set(nums[i], i);
    }
    return [];
};

let nums = [2, 6, 5, 4, 1]
let target = 9
let a = twoSum(nums, target)
console.log(a)