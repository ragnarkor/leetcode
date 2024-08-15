/*
 * @lc app=leetcode.cn id=136 lang=javascript
 * @lcpr version=30203
 *
 * [136] 只出现一次的数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    nums.forEach(num => result ^= num);
    return result;
};
/**
 * 任何数和 0 做异或运算，结果仍然是原来的数，即a⊕0=a。
 * 任何数和其自身做异或运算，结果是 0，即a⊕a=0。
 * 异或运算满足交换律和结合律，即a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。
 */
// @lc code=end




/*
// @lcpr case=start
// [2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [4,1,2,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

