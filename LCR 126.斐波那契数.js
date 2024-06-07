/*
 * @lc app=leetcode.cn id=LCR 126 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 126] 斐波那契数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    const dp = [0, 1]    // 初始化dp
    if(n < 2) return dp[n]
    for(let i = 2; i <= n; i++){
        dp[2] = (dp[0] + dp[1]) % 1000000007
        // 数组向右滚动
        dp[0] = dp[1]
        dp[1] = dp[2]
    }
    return dp[2] 
};
// @lc code=end

/**
 * 1.d[i]表示斐波那契数组第i项的值
 * 2.d[i]=d[i-1]+d[i-2]
 * 3.d[0]=0,d[1]=1
 * 4.从前往后遍历
 */

/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */

