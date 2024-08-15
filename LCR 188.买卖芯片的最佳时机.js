/*
 * @lc app=leetcode.cn id=LCR 188 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 188] 买卖芯片的最佳时机
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var bestTiming = function(prices) {
    if(prices.length < 2)
        return 0
    let sell = 0 , buy = 0 , max = 0
    for(sell = 1; sell < prices.length; sell++){
        if(prices[sell] > prices[buy]){
            if(prices[sell] - prices[buy] > max)
                max = prices[sell] - prices[buy];
        }else
            buy = sell; // 表明此时不是历史最低点，移动指针
    }
    return max;
    /**
     * 思路：贪心算法，假设自己在最低点买入，遍历数组
     *  - 如果价格>买入价，更新最大值，卖出股票
     *  - 如果价格<=买入价，说明此时不是历史最低点，更新最小值移动buy指标
     */
};
// @lc code=end

/**
 * 思路：贪心算法，假设自己在最低点买入，遍历数组
 *  - 如果价格>买入价，更新最大值，卖出股票
 *  - 如果价格<=买入价，说明此时不是历史最低点，更新最小值移动buy指标
 * 题解：https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/solutions/793487/tan-xin-suan-fa-jie-jue-jian-dan-ming-li-5ej2/
 */

/*
// @lcpr case=start
// [3, 6, 2, 9, 8, 5]\n
// @lcpr case=end

// @lcpr case=start
// [8, 12, 15, 7, 3, 10]\n
// @lcpr case=end

 */

