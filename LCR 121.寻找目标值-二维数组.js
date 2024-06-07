/*
 * @lc app=leetcode.cn id=LCR 121 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 121] 寻找目标值 - 二维数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} plants
 * @param {number} target
 * @return {boolean}
 */

// z字形查找
var findTargetIn2DPlants = function(matrix, target) {
    const n = matrix.length
    if(!n) return false
    const m = matrix[0].length
    let row = 0, col = m - 1    // 从右上角开始
    while(row < n && col >= 0){    // 遍历到左下角结束
        if(matrix[row][col] === target) return true
        else if(matrix[row][col] > target) col--    // col中都大于(row, col)，这列不会有target
        else row++  // row中都小于(row, col)，这行不会有target
    }
    return false
};

// 对每一行执行二分查找
// var findTargetIn2DPlants = function(matrix, target) {
//     const n = matrix.length
//     if(!n) return false
//     const m = matrix[0].length
//     for(let i = 0; i < n; i++){
//         // 左闭右开
//         let left = 0, right = m
//         while(left < right){
//             let mid = Math.floor((left + right) / 2)
//             if(matrix[i][mid] < target) left = mid + 1
//             else if(matrix[i][mid] > target) right = mid
//             else return true
//         }
//     }
//     return false
// };
// @lc code=end

/**
 * 法一：
 *  二分法：https://www.bilibili.com/video/BV1fA4y1o715/?spm_id_from=333.337.search-card.all.click&vd_source=0803747abec14f63312f7ed860d78d60
 * 法二：z字形查找
 *  - 从右上角遍历到左下角
 *  - target与matrix[row][col]比大小
 *      - target = matrix[row][col]，找到目标
 *      - target > matrix[row][col]，target大于这行最大元素，row++
 *      - target < matrix[row][col]，target小于这列最小元素，col--
 */

/*
// @lcpr case=start
// [[2,3,6,8],[4,5,8,9],[5,9,10,12]]\n8\n
// @lcpr case=end

// @lcpr case=start
// [[1,3,5],[2,5,7]]\n4\n
// @lcpr case=end

 */

