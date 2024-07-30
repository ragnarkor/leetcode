/*
 * @lc app=leetcode.cn id=2288 lang=javascript
 * @lcpr version=30203
 *
 * [2288] 价格减免
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} sentence
 * @param {number} discount
 * @return {string}
 */
var discountPrices = function(sentence, discount) {
    const words = (sentence.split(' ')).map(word =>{
        if(/^\$\d+$/.test(word)){    // 正则表达式判断（注意匹配字符串边界）
            const price = Number.parseFloat(word.slice(1))   // 获取价格数字
            const newPrice = (price * (1 - discount / 100)).toFixed(2)   // 统一保留小数点后两位
            return `$${newPrice}`
        }
        return word
    })
    return words.join(' ')
};
// @lc code=end

/**
 * 模拟法
 */

/*
// @lcpr case=start
// "there are $1 $2 and 5$ candies in the shop"\n50\n
// @lcpr case=end

// @lcpr case=start
// "1 2 $3 4 $5 $6 7 8$ $9 $10$"\n100\n
// @lcpr case=end

 */

