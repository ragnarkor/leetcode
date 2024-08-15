/*
 * @lc app=leetcode.cn id=3148 lang=javascript
 * @lcpr version=30204
 *
 * [3148] 矩阵中的最大得分
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function(grid) {
    let m = grid.length, n = grid[0].length
    // 初始化dp
    const dp = Array.from({length: m+1}, () => new Array(n+1).fill(Number.MAX_SAFE_INTEGER))
    let res = Number.MIN_SAFE_INTEGER
    for(let i = 1; i < m+1; i++){
        for(let j = 1; j < n+1; j++){
            let min = Math.min(dp[i-1][j], dp[i][j-1])
            // 更新dp值
            dp[i][j] = Math.min(grid[i-1][j-1], min)
            // 计算最大值
            res = Math.max(res, grid[i-1][j-1]-min)
        }
    }
    return res
};
/**
 * 思路：动态规划
 * 1. 定义：dp[i][j]表示(0,0)到(i,j)的最小值，不含(i,j)
 * 2. 递推关系：dp[i][j] = min(grid[i][j], dp[i-1][j], dp[i][j-1])
 * 3. 初始化：填充多一行和一列，值为∞
 * 4. 从左往右、从上往下遍历，更新最大值为max(res, grid[i][j]-min(dp[i-1][j], dp[i][j-1]))
 * 题解：https://www.bilibili.com/video/BV1bx4y1i7rP/?vd_source=0803747abec14f63312f7ed860d78d60
 */
// @lc code=end



/*
// @lcpr case=start
// [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[4,3,2],[3,2,1]]\n
// @lcpr case=end

 */

