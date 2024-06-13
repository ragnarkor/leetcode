/*
 * @lc app=leetcode.cn id=LCR 130 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 130] 衣橱整理
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var wardrobeFinishing = function(m, n, k) {
    // 创建棋盘
    const board = Array.from({length: m}, v => new Array(n).fill(0))
    // const board = new Array(m).fill(0).map(v => new Array(n).fill(0))
    return backTracking(board, 0, 0, k)
};

function backTracking(board, i, j, k){
    const m = board.length, n = board[0].length
    // 到达边界或格子已走过
    if(i < 0 || i >= m || j < 0 || j>= n || board[i][j]) return 0
    // 注意是数位之和！
    if(digit(i) + digit(j) > k) return 0
    let res = 1
    const dx = [0, 0, 1, 0], dy = [0, 1, 0, 0]
    // const dx = [-1, 0, 1, 0], dy = [0, 1, 0, -1]
    board[i][j] = 1 // 将已走过的格子做标记(不需要恢复)
    for(let n = 0; n < 4; n++){
        let x = i + dx[n], y = j + dy[n]
        res += backTracking(board, x, y, k)
    }
    return res
}

/**
 * 计算 x 的数位之和，如getIntSum(18) = 1 + 8 = 9
 * @param {*} x 
 * @returns 
 */
function digit(x) {
    let res = 0
    while(x){ 
        res += x % 10
        x = x / 10 | 0  // js的/为浮点数，需要取整
    }
    return res;
}
// @lc code=end

/**
 * 原题为机器人的运动范围，题干改变后回溯遍历可直接考虑比向右/向下遍历，原题干还需证明。
 */

/*
// @lcpr case=start
// 4\n7\n5\n
// @lcpr case=end

 */

