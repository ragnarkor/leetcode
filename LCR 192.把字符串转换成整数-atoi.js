/*
 * @lc app=leetcode.cn id=LCR 192 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 192] 把字符串转换成整数 (atoi)
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let s = str.trim()  // 去除首尾空格
    let hasNum = false  // 标志位判断是否有数字
    let nums = [], num = 0
    const INT_MAX = 2 ** 31 - 1, INT_MIN = (-2) ** 31 // 重新定义最大最小值
  
    for(let i = 0; i < s.length; i++){
      const c = s[i]
      if(c >= '0' && c <= '9'){ // 数字
        hasNum = true
        nums.push(c)
        // 溢出处理
        num = Number(nums.join(''))
        if(num > INT_MAX) return INT_MAX
        if(num < INT_MIN) return INT_MIN
      }else if(c === '+' || c === '-'){ // 正负号：要出现在首位，后面需有数字
        if(i === 0) nums.push(c)
        else break
      }else{  // 其他字符
        if(i === 0) return 0  // 出现在首位则表明不能有效转换
        break // 停止累积数字
      }
    }
  
    return hasNum && num
  };
/**
 * 题解：Goodnotes-模拟·把字符串转化成整数
 */
// @lc code=end



/*
// @lcpr case=start
// "42"\n
// @lcpr case=end

// @lcpr case=start
// "   -42"\n
// @lcpr case=end

// @lcpr case=start
// "4193 with words"\n
// @lcpr case=end

 */

