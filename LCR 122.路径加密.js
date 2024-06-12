/*
 * @lc app=leetcode.cn id=LCR 122 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 122] 路径加密
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var pathEncryption = function(path) {
    const res = []
    for(const c of path){
        res.push(c === '.'? ' ': c)
    }
    return res.join('')
};
// @lc code=end



/*
// @lcpr case=start
// "a.aef.qerf.bb"\n
// @lcpr case=end

 */

