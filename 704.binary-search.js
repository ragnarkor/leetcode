/*
 * @lc app=leetcode.cn id=704 lang=javascript
 * @lcpr version=30204
 *
 * [704] 二分查找
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) return mid
        if(nums[mid] < target) left = mid + 1
        else right = mid - 1
    }
    return -1;  // 找不到返回 -1
};
// @lc code=end



/*
// @lcpr case=start
// [-1,0,3,5,9,12]\n9\n
// @lcpr case=end

// @lcpr case=start
// [-1,0,3,5,9,12]\n2\n
// @lcpr case=end

 */

