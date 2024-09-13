/*
 * @lc app=leetcode.cn id=LCR 161 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 161] 连续天数的最高销售额
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
* @param {number[]} nums
* @return {number}
*/
var maxSales = function(nums) {
   if(nums.length < 1) return 0
   const dp = [nums[0]]
   for(let i = 1; i < nums.length; i++){
        // 1. 从第i个数开始计算子数组之和
        // 2. 以第i-1个数为结尾的子数组之和+nums[i]
       dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
   }
   return Math.max(...dp)
};
/**
 * 题解：Goodnotes-动态规划·连续子数组的最大和
 */
// @lc code=end



/*
// @lcpr case=start
// [-2,1,-3,4,-1,2,1,-5,4]\n
// @lcpr case=end

// @lcpr case=start
// [5,4,-1,7,8]\n
// @lcpr case=end

 */

