/*
 * @lc app=leetcode.cn id=LCR 127 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 127] 跳跃训练
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var trainWays = function(num) {
    let dp = [0, 0, 1]  // dp[i]第i个格子的跳跃方式之和
    for(let i = 1; i <= num; i ++){
        // 向左滚动
        dp[0] = dp[1]
        dp[1] = dp[2]
        dp[2] = (dp[0] + dp[1]) % 1000000007
    }
    return dp[2]
  };
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

 */

