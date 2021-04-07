## 环境快速搭建
```
npm init -y
// 安装webpack
npm i -D webpack webpack-cli
npm i -D html-webpack-plugin
npm i -D webpack-dev-server
```

## 第一题 两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
```
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

let nums = [2, 7, 5, 4, 1]
let target = 9
let a = twoSum(nums, target)
console.log(a) // [0,1]
```

## 第二题 两数相加

