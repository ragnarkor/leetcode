/*
 * @lc app=leetcode.cn id=2965 lang=javascript
 * @lcpr version=30203
 *
 * [2965] 找出缺失和重复的数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    // 暴力法
    let n = grid.length
    // 统计出现频数
    const cnt = new Array(n*n+1).fill(0)
    for(let i = 0; i < n; i++){
        for(let j = 0; j< n; j++){
            cnt[grid[i][j]]++
        }
    }
    // 找出频数为0和2的数字
    const ans = []
    for(let i = 1; i < n*n+1; i++){
        if(cnt[i] === 2) ans[0] = i
        if(cnt[i] === 0) ans[1] = i
    }
    return ans
};
// @lc code=end



/*
// @lcpr case=start
// [[1,3],[2,2]]\n
// @lcpr case=end

// @lcpr case=start
// [[9,1,7],[8,9,2],[3,4,6]]\n
// @lcpr case=end

 */

