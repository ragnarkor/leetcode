/*
 * @lc app=leetcode.cn id=3128 lang=javascript
 * @lcpr version=30204
 *
 * [3128] 直角三角形
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function(grid) {
    let n = grid.length, m = grid[0].length
    const rowSum = new Array(n).fill(-1)    // 提前-1
    const colSum = new Array(m).fill(-1)
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            rowSum[i] += grid[i][j]
            colSum[j] += grid[i][j]
        }
    }

    let res = 0
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            res += grid[i][j] * rowSum[i] * colSum[j]
        }
    }
    return res
};
// @lc code=end

/**
 * 思路：有3个顶点，枚举中间顶点
 * 1. 统计中间节点的列上有c个1
 * 2. 统计中间节点的行上有l个1
 * 3. 该顶点有(c-1)*(l-1)个直角三角形
 * 题解：https://www.bilibili.com/video/BV16t421c7GB/?vd_source=0803747abec14f63312f7ed860d78d60
 */


/*
// @lcpr case=start
// [[0,1,0],[0,1,1],[0,1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,0,0],[0,1,0,1],[1,0,0,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,0,1],[1,0,0],[1,0,0]]\n
// @lcpr case=end

 */

