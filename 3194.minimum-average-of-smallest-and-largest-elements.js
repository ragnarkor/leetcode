/*
 * @lc app=leetcode.cn id=3194 lang=javascript
 * @lcpr version=30204
 *
 * [3194] 最小元素和最大元素的最小平均值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a, b) => a - b)
    let n =nums.length
    let min = Number.MAX_SAFE_INTEGER
    for(let i = 0; i < n/2; i++){
        let average = (nums[i] + nums[n-i-1]) / 2
        min = Math.min(min, average)
    }
    return min
};
// 思路：排序后遍历
// @lc code=end



/*
// @lcpr case=start
// [7,8,3,4,15,13,4,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,9,8,3,10,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,7,8,9]\n
// @lcpr case=end

 */

