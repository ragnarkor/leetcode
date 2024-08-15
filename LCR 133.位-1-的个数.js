/*
 * @lc app=leetcode.cn id=LCR 133 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 133] 位 1 的个数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// var hammingWeight = function(n) {
//     let res = 0;
//     while(n){
//       if(n & 1) res++;
//       n = n >>> 1;  // n右移一位
//     }
//     return res;
// };

var hammingWeight = function(n) {
    let res = 0;
    while(n){
      res++;
      n = n & (n-1);  // n&(n-1)可以将n的最后一位1变为0
    }
    return res;
};
/**
 * 思路：
 * 1. n-1：二进制数字n最右边的1变成0，最右边后面的0都变成1
 * 2. n&(n-1)：二进制数字n最右边的1变成0，其余不变
 * 题解：Goodnotes-位运算·二进制中1的个数
 */
// @lc code=end



/*
// @lcpr case=start
// 11 (控制台输入 00000000000000000000000000001011)\n
// @lcpr case=end

// @lcpr case=start
// 128 (控制台输入 00000000000000000000000010000000)\n
// @lcpr case=end

// @lcpr case=start
// -3）\n
// @lcpr case=end

 */

