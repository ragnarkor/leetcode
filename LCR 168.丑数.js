/*
 * @lc app=leetcode.cn id=LCR 168 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 168] 丑数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = new Array(n).fill(1) // 丑数数组
    let p2 = p3 = p5 = 0    // 初始化指针
    for(let i = 0; i < n-1; i++){
        // 取最小值加入丑数数组
        dp[i+1] = Math.min(dp[p2]*2, dp[p3]*3, dp[p5]*5)
        // 加入数组后指针后移（有重复加入的丑数也同时后移指针）
        if(dp[i+1] === dp[p2]*2) p2++
        if(dp[i+1] === dp[p3]*3) p3++
        if(dp[i+1] === dp[p5]*5) p5++
    }
    return dp[n-1]
};
/**
 * 题解：Goodnotes-动态规划·丑数
 */
// @lc code=end



/*
// @lcpr case=start
// 10\n
// @lcpr case=end

 */

