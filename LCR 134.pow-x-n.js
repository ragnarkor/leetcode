/*
 * @lc app=leetcode.cn id=LCR 134 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 134] Pow(x, n)
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(x === 0) return 0    // 0的幂为0
    // 当n为负数时
    if(n < 0){
        x = 1 / x
        n = -n
    }
    
    let res = 1
    while(n){
        if(n & 1)   // 从右往左取指数
            res *= x
        x *= x  //  底数平方
        n /= 2 // 右移一位(不知道为什么用n>>>1会溢出)
    }
    return res
};
/**
 * 题解：Goodnotes-位运算·数值的整数次方
 */
// @lc code=end



/*
// @lcpr case=start
// 2.00000\n10\n
// @lcpr case=end

// @lcpr case=start
// 2.10000\n3\n
// @lcpr case=end

// @lcpr case=start
// 2.00000\n-2\n
// @lcpr case=end

 */

