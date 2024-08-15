/*
 * @lc app=leetcode.cn id=LCR 146 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 146] 螺旋遍历二维数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralArray = function(matrix) {
    const res = []
    if(matrix.length < 1) return res    // 空矩阵
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;

    while (top < bottom && left < right) {
        for (let i = left; i < right; i++) res.push(matrix[top][i]);   // 上层
        for (let i = top; i < bottom; i++) res.push(matrix[i][right]); // 右层
        for (let i = right; i > left; i--) res.push(matrix[bottom][i]);// 下层
        for (let i = bottom; i > top; i--) res.push(matrix[i][left]);  // 左层
        right--;
        top++;
        bottom--;
        left++;
  }
    if (top == bottom)  // 剩下一行，从左到右依次添加
        for (let i = left; i <= right; i++) res.push(matrix[top][i]);
    else if (left == right)  // 剩下一列，从上到下依次添加
        for (let i = top; i <= bottom; i++) res.push(matrix[i][left]);

    return res;
};
/**
 * 题解：Goodnotes-模拟·顺时针打印矩阵
 */
// @lc code=end



/*
// @lcpr case=start
// [[1,2,3],[8,9,4],[7,6,5]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]]\n
// @lcpr case=end

 */

