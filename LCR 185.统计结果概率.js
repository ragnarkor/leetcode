/*
 * @lc app=leetcode.cn id=LCR 185 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 185] 统计结果概率
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var statisticsProbability = function(n) {
    let dp = [], res = []
    dp[0] = new Array(6).fill(1)    // 初始化dp

    for(let i = 1; i < n; i++){
        // i个骰子下所有s值范围为[i, 6i]，对应dp即为[i, 6*(i+1)-1]
        dp[i] = new Array(6*i+6).fill(0)
        for(let j = i; j < 6*i+6; j++){
            for(let k = 1; k <= 6; k++)
                dp[i][j] += dp[i-1][j-k] || 0   // dp[i-1][j-l]的和在上一层可能不存在
        }
    }

    // 计算概率：组合数 / 总组合数6^n，需要排除掉组合数为0的值
    res = dp[n-1].slice(n-1, 6*n).map(cnt => cnt / (6 ** n))
    return res
};
/**
 * 题解：Goodnotes-动态规划·n个骰子的点数
 */
// @lc code=end



/*
// @lcpr case=start
// 3\n
// @lcpr case=end

// @lcpr case=start
// 5\n
// @lcpr case=end

 */

