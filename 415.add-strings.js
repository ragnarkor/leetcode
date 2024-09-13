/*
 * @lc app=leetcode.cn id=415 lang=javascript
 * @lcpr version=30204
 *
 * [415] 字符串相加
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // 双指针指向末位数字
    let carry = 0, p1 = num1.length-1, p2 = num2.length-1
    let res = ""
    while(p1 >= 0 || p2 >= 0){
        // 将字符串转换成数字（注意当前位是否为空）
        let digit1 = p1 >= 0 ? num1[p1--] - 0 : 0   // 顺便指针前移
        let digit2 = p2 >= 0 ? num2[p2--] - 0 : 0
        // 竖式加法
        let sum = carry + digit1 + digit2
        carry = sum / 10 | 0 
        res = `${sum % 10}${res}`
    }
    // 最后注意有没有进位
    return carry ? `1${res}` : res
};
// 思路：模拟竖式加法
// @lc code=end



/*
// @lcpr case=start
// "11"\n"123"\n
// @lcpr case=end

// @lcpr case=start
// "456"\n"77"\n
// @lcpr case=end

// @lcpr case=start
// "0"\n"0"\n
// @lcpr case=end

 */

