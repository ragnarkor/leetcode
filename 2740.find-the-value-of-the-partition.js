/*
 * @lc app=leetcode.cn id=2740 lang=javascript
 * @lcpr version=30204
 *
 * [2740] 找出分区值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function(nums) {
    nums.sort((a, b) => a - b)   // 从小到大排序
    let diff = Number.MAX_SAFE_INTEGER
    for(let i = 1; i < nums.length; i++)
        diff = Math.min(diff, nums[i] - nums[i-1])    // nums[i] >= nums[i-1]
    return diff
};
// @lc code=end

/**
 * 思路：分区最小值是排序后相邻数字的绝对值最小差
 * 1. 将nums从小到大排序
 * 2. 比较寻找出相邻数字的最小绝对差nums[i-1]和nums[i]
 * 3. <=nums[i-1]的分到第一个数组，>=nums[i]的分到第二个数组
 * 时间复杂度O(nlogn)，即排序算法复杂度
 */

/*
// @lcpr case=start
// [1,3,2,4]\n
// @lcpr case=end

// @lcpr case=start
// [100,1,10]\n
// @lcpr case=end

 */

