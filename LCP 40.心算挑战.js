/*
 * @lc app=leetcode.cn id=LCP 40 lang=javascript
 * @lcpr version=30204
 *
 * [LCP 40] 心算挑战
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maximumScore = function(cards, cnt) {
    cards = cards.sort((a, b) => b - a)
    let sum = cards.slice(0, cnt).reduce((total, val) => total + val, 0)
    // sum为偶数直接返回
    if(sum % 2 === 0) return sum

    /**
     * 找出与x奇偶性不同的最大的数，将其与x进行替换
     * @param {*} x 被替换的数
     * @returns 
     */
    function replace(x){
        for(let i = cnt; i < cards.length; i++){
            // 找出与x奇偶性不同的数
            if(x % 2 !== cards[i] % 2)
                return sum - x + cards[i]
        }
        return 0    // 不存在有效的得分卡牌方案
    }

    let x = cards[cnt - 1]  // 第一个被取代的是最小值
    let res = replace(x)
    for(let i = cnt-2; i >= 0; i--){
        // 找出另外一个被取代的值
        if(x % 2 !== cards[i] % 2){
            res = Math.max(res, replace(cards[i]))
            break
        }
    }
    return res
};

/**
 * 思路：贪心算法
 * 1. 将卡牌从大到小排序，前cnt个数相加之和为sum
 * 2. 如果sum为偶数，直接返回结果；如果为奇数，则：
 *  - 剔除最小奇数，剩余数组中加入最大偶数
 *  - 剔除最小偶数，剩余数组中加入最大奇数
 *  - 比较两个结果，取最大值
 * 时间复杂度O(nlogn)，空间复杂度O(1)
 */
// @lc code=end


/*
// @lcpr case=start
// [1,2,8,9]\n3`>\n
// @lcpr case=end

// @lcpr case=start
// [3,3,1]\n1`>\n
// @lcpr case=end

 */

