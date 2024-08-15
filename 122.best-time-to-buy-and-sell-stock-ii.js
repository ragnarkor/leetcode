/*
 * @lc app=leetcode.cn id=122 lang=javascript
 * @lcpr version=30204
 *
 * [122] 买卖股票的最佳时机 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 思路：贪心，只要盈利就买入卖出
    let profit = 0;
    for(let i = 1; i < prices.length; i++){
      profit += Math.max(0,prices[i] - prices[i - 1]);
    }
    return profit;
};
// @lc code=end

/**
 * 题解：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/
 */

/*
// @lcpr case=start
// [7,1,5,3,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,4,3,1]\n
// @lcpr case=end

 */

