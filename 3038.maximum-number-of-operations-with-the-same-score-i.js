/*
 * @lc app=leetcode.cn id=3038 lang=javascript
 * @lcpr version=30203
 *
 * [3038] 相同分数的最大操作数目 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function(nums) {
    // 模拟
    let sum = nums[0] + nums[1]
    let cnt = 1
    for(let i = 2; i < nums.length; i += 2) {
        if(nums[i] + nums[i + 1] === sum) cnt ++
        else return cnt
    }
    return cnt
};
// @lc code=end



/*
// @lcpr case=start
// [3,2,1,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [3,2,6,1,4]\n
// @lcpr case=end

 */

