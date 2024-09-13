/*
 * @lc app=leetcode.cn id=72 lang=javascript
 * @lcpr version=30204
 *
 * [72] 编辑距离
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    let n = word1.length, m = word2.length
    const dp = Array.from({length: n+1}, () => new Array(m+1).fill(0))
    // 初始化dp
    for(let i = 0; i < n+1; i++)
        dp[i][0] = i
    for(let j = 0; j < m+1; j++)
        dp[0][j] = j
    // dp递推
    for(let i = 1; i < n+1; i++){
        for(let j = 1; j < m+1; j++){
            // 字符相等，不用编辑
            if(word1[i-1] === word2[j-1])
                dp[i][j] = dp[i-1][j-1]
            // 三种情况：1. 删除word1[i-1]，2. 删除word2[j-1]，3. 替换word1[i-1]
            else
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
        }
    }
    return dp[n][m]
};
/**
 * 题解：Goodnotes-动态规划·编辑距离
 */
// @lc code=end



/*
// @lcpr case=start
// "horse"\n"ros"\n
// @lcpr case=end

// @lcpr case=start
// "intention"\n"execution"\n
// @lcpr case=end

 */

