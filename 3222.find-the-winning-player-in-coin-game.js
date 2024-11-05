/*
 * @lc app=leetcode.cn id=3222 lang=javascript
 * @lcpr version=30204
 *
 * [3222] 求出硬币游戏的赢家
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function(x, y) {
    const k = Math.min(x, y/4|0)
    return k % 2 ? 'Alice' : 'Bob'
};
/**
 * 思路：因为 10 的倍数不可能等于 115，所以面额为 10 的硬币不能单独选，至少要选 1 个面额为 75 的硬币。
 *  - 本质上来说，我们在求解二元一次不定方程 75a+10b=115，它有唯一正整数解 a=1,b=4。
 *  - 故计算出能玩的回合k，k为奇数则Alice获胜；偶数则Bob获胜。
 * 题解：https://leetcode.cn/problems/find-the-winning-player-in-coin-game/solutions/2851440/o1-shu-xue-zuo-fa-pythonjavacgo-by-endle-427f/
 */
// @lc code=end



/*
// @lcpr case=start
// 2\n7\n
// @lcpr case=end

// @lcpr case=start
// 4\n11\n
// @lcpr case=end

 */

