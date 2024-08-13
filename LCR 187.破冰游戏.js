/*
 * @lc app=leetcode.cn id=LCR 187 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 187] 破冰游戏
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
* @param {number} n 成员数量
* @param {number} m
* @return {number} 存活成员位置
*/
var iceBreakingGame = function(n, m) {
   let dp = 0  // 初始化，只有一个数时序号为0
   for(let i = 2; i < n + 1; i++){
       dp = (dp + m % i) % i
   }
   return dp
}

// var iceBreakingGame = function(n, m) {
//     if(n === 1) return 0  // 只剩一个时必定是第一位
//     const x = m % n   // 删除的数字 
//     const y = iceBreakingGame(n-1, m) // 获取剩下 n-1 个数的幸存者的相对位置
//     return (x + y) % n  // 在n中恢复幸存者的位置
// };
// @lc code=end

/**
 * 题解：Goodnotes-约瑟夫环
 * 视频：https://www.bilibili.com/video/BV1KP411L7VH?p=68&vd_source=0803747abec14f63312f7ed860d78d60
 */

/*
// @lcpr case=start
// 7\n4\n
// @lcpr case=end

// @lcpr case=start
// 12\n5\n
// @lcpr case=end

 */

