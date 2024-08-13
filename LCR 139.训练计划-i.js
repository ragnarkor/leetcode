/*
 * @lc app=leetcode.cn id=LCR 139 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 139] 训练计划 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var trainingPlan = function(nums) {
    if(!nums) return nums
    let odd = 0, even = nums.length - 1
    while(odd < even){  // 左右指针相遇则结束
        // 左指针遇到偶数停下
        while(odd < even && nums[odd] % 2 === 1) odd++
        // 右指针遇到奇数停下
        while(odd < even && nums[even] % 2 === 0) even--
        // 交换左右指针
        [nums[odd], nums[even]] = [nums[even], nums[odd]]
    }
    return nums
};
// @lc code=end

/**
 * 思路：双指针
 */

/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

 */

