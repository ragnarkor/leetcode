/*
 * @lc app=leetcode.cn id=2806 lang=javascript
 * @lcpr version=30203
 *
 * [2806] 取整购买后的账户余额
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function(purchaseAmount) {
    const account = 100
    // 四舍五入
    const r = Math.floor((purchaseAmount + 5) / 10)
    return account - 10 * r

    // 分类讨论
    // const quotient = Math.floor(purchaseAmount / 10)
    // const remainder = purchaseAmount % 10
    // return account - 10 * (quotient + (remainder < 5 ? 0 : 1))
};
// @lc code=end



/*
// @lcpr case=start
// 9\n
// @lcpr case=end

// @lcpr case=start
// 15\n
// @lcpr case=end

 */

