/*
 * @lc app=leetcode.cn id=LCR 135 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 135] 报数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countNumbers = function(n) {
    // 计算数位
    let res = new Array(Math.pow(10, n) - 1).fill(0)
    return res.map((value, index) => index + 1)
};
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

 */

