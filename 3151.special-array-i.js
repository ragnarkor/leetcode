/*
 * @lc app=leetcode.cn id=3151 lang=javascript
 * @lcpr version=30204
 *
 * [3151] 特殊数组 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    // 暴力法一次遍历
    // 只有1个元素时符合
    for(let i = 1; i < nums.length; i++){
        if((nums[i-1] + nums[i]) % 2 === 0)
            return false
    }
    return true
};
// @lc code=end



/*
// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,4]\n
// @lcpr case=end

// @lcpr case=start
// [4,3,1,6]\n
// @lcpr case=end

 */

