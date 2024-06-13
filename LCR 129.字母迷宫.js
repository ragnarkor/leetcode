/*
 * @lc app=leetcode.cn id=LCR 129 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 129] 字母迷宫
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {character[][]} grid
 * @param {string} target
 * @return {boolean}
 */
var wordPuzzle = function(board, word) {
    let m = board.length, n = board[0].length
    // 遍历集合回溯
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            // 存在路径即返回true
            if(backTracking(board, word, i, j, 0)) return true
        }
    }
    return false
};

/**
 * 
 * @param {*} board 
 * @param {*} word 要找的路径
 * @param {*} i 当前元素位置
 * @param {*} j 当前元素位置
 * @param {*} startIndex 路径起点
 * @returns 
 */
function backTracking(board, word, i, j, startIndex){
    let m = board.length, n = board[0].length
    // 剪枝掉非路径和超出矩阵边界的节点
    if(i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[startIndex]) return false
    // 查找到单词末尾
    if(startIndex === word.length - 1) return true

    const dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1]
    // 遍历相邻节点
    board[i][j] = ''    // 剪枝掉重复节点（相当于visited）
    for(let k = 0; k < 4; k++){
        let x = i + dx[k], y = j + dy[k]
        // 存在路径则返回
        if(backTracking(board, word, x, y, startIndex+1)) return true
    }
    board[i][j] = word[startIndex]  // 恢复节点（相当于取消visited标记）
    return false    // 没有找到路径
}
// @lc code=end

/**
 * 矩阵中的路径：https://www.bilibili.com/video/BV1Pt4y1V7DN/?spm_id_from=333.337.search-card.all.click&vd_source=0803747abec14f63312f7ed860d78d60
 */

/*
// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"SEE"\n
// @lcpr case=end

// @lcpr case=start
// [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCB"\n
// @lcpr case=end

 */

