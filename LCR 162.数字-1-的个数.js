/*
 * @lc app=leetcode.cn id=LCR 162 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 162] 数字 1 的个数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var digitOneInNumber = function(n) {
    let res = 0, base = 1
    while(n / base | 0){
      const a = n / base / 10 | 0
      const b = n % base
      const cur = (n / base | 0) % 10
  
      if(cur > 1) res += (a + 1) * base
      else if(cur < 1) res += a * base
      else res += a * base + b + 1
  
      base *= 10
    }
    return res
  };
// @lc code=end

/**
 * 题解：Goodnotes-数学·找规律·1～n整数中1出现的次数
 */

/*
// @lcpr case=start
// 0\n
// @lcpr case=end

// @lcpr case=start
// 13\n
// @lcpr case=end

 */

