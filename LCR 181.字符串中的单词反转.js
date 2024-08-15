/*
 * @lc app=leetcode.cn id=LCR 181 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 181] 字符串中的单词反转
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseMessage = function(s) {
    // s = s.trim()
    // let sArr = s.split(/\s+/).reverse() // 使用正则匹配符分割后翻转
    // return sArr.join(' ')

    s = s.trim()    // 去除首尾空格
    let p = s.length - 1, q = p
    let res = []
    while(p >= 0){
        while(q >= 0 && s[q] !== ' ') q--    // 遇到空格停止
        res.push(s.slice(q+1, p+1) + ' ')  // 将单词和空格加入返回结果
        while(q >= 0 && s[q] === ' ') q-- // 跳过空格
        p = q
    }
    return res.join('').trim()
};
// @lc code=end



/*
// @lcpr case=start
// "the sky is blue"\n
// @lcpr case=end

// @lcpr case=start
// "  hello world!  "\n
// @lcpr case=end

// @lcpr case=start
// "a good   example"\n
// @lcpr case=end

 */

