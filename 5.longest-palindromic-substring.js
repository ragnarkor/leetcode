/*
 * @lc app=leetcode.cn id=5 lang=javascript
 * @lcpr version=30203
 *
 * [5] 最长回文子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 初始化dp二位数组
    const n = s.length
    const dp = Array.from({length: n},() => new Array(n).fill(false))   // 妙！
    
    let startIndex, endIndex    // 存放回文子串索引
    let maxLength = 0
    for(let i = n-1; i >= 0; i--){   // i从右往左遍历
        for(let j = i; j < n; j++){ // j从左往右遍历
            if(s[i] === s[j]){
                if(j-i > 1){    // [i,j]有三个字符
                    dp[i][j] = dp[i+1][j-1]
                }else{  // [i,j]只有1个/2个字符
                    dp[i][j] = true
                }
            }
            
            // 判断是否要更新最长回文子串
            if(dp[i][j] && maxLength < j-i+1){
                maxLength = j - i + 1
                startIndex = i
                endIndex = j
            }
        }
    }
    return s.slice(startIndex, endIndex+1)
};

/**
 * 动态规划思路：如果[i,j]为回文数组，只需判断i-1和j+1是否相同即可
 * 1. dp[i][j]：[i,j]是否为回文数组
 * 2. 递推公式：当s[i]=s[j]=a时，分析i/j情况
 *  - 只有一个字符a，此时i=j，[i,j]为回文数组
 *  - 有两个重复字符aa，此时i=j+1，[i,j]为回文数组、
 *  - 根据dp[i][j] = dp[i+1][j-1]
 * 3. 初始化：dp[i][j]均为false
 * 4. 遍历顺序：i从右往左遍，j从左往右遍历
 * 
 * 比较最长子串位置
 * 返回i/j索引对应的字符串即可
 */
// @lc code=end



/*
// @lcpr case=start
// "babad"\n
// @lcpr case=end

// @lcpr case=start
// "cbbd"\n
// @lcpr case=end

 */

