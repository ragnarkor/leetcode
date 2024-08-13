/*
 * @lc app=leetcode.cn id=3 lang=javascript
 * @lcpr version=30204
 *
 * [3] 无重复字符的最长子串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 法一：滑动窗口·set
    const n = s.length;
    const set = new Set()
    let ans = 0, i = 0, j = 0
    while (i < n && j < n) {
        // try to extend the range [i, j]
        if (!set.has(s[j])){
            set.add(s[j++]);
            ans = Math.max(ans, j - i);
        }
        else {
            set.delete(s[i++]);
        }
    }
    return ans

    // 法一：滑动窗口
    // const dict = new Map()
    // let left = -1, ans = 0  // (left, right]
    // for(let right = 0; right < s.length; right++){
    //     // 已经记录过，即遇到重复元素
    //     if(dict.has(s[right])) 
    //         left = Math.max(left, dict.get(s[right]))
    //     dict.set(s[right], right)   // 记录/刷新位置
    //     ans = Math.max(ans, right - left)   // 更新长度
    // }
    // return ans

    // 法二：动态规划
    // const dict = new Map()
    // let dp0 = 0, ans = 0
    // for(let j = 0; j < s.length; j++){
    //     let i = dict.has(s[j]) ? dict.get(s[j]) : -1
    //     dict.set(s[j], j)   // 更新dict
    //     if(dp0 < j-i)
    //         dp0 = dp0 + 1
    //     else
    //         dp0 = j-i
    //     ans = Math.max(dp0, ans)
    // }
    // return ans
};
// @lc code=end

/**
 * 法一：滑动窗口（时间复杂度O(n)，空间复杂度O(1)）
 * 1. right指针遍历字符串，更新s[right]的最大索引
 * 2. 遇到重复字符，left指针限定无重复子字符串范围（'abba'）
 *  - dict中可读取到重复字符最后出现的索引，但并不能保证无重复
 *  - 原(left, right-1]为无重复子字符串
 *  - 故left = max(dict[right], left)
 * 3. 更新结果
 * 
 * 法二：动态规划（时间复杂度O(n)，空间复杂度O(1)）
 * 1. dp[j]表示以s[j]结尾的最大无重复子串
 * 2. 设与s[j]最近的相同字符为s[i]
 *  - i < 0，说明无重复子串，dp[j] = dp[j-1] + 1
 *  - dp[j-1] < j-i，说明s[i]在dp[j-1]的区间之外，dp[j] = dp[j-1] + 1
 *  - dp[j-1] >= j-i，说明s[i]在dp[j-1]的区间中，无重复长度由i决定，dp[j] = i-j
 * 3. dp[0] = 0
 * 题解：Goodnotes-动态规划·最长不含重复字符的子字符串
 * 题解：https://leetcode.cn/problems/longest-substring-without-repeating-characters/solutions/2361797/3-wu-zhong-fu-zi-fu-de-zui-chang-zi-chua-26i5/
 */

/*
// @lcpr case=start
// "abcabcbb"\n
// @lcpr case=end

// @lcpr case=start
// "bbbbb"\n
// @lcpr case=end

// @lcpr case=start
// "pwwkew"\n
// @lcpr case=end

// @lcpr case=start
// "abba"\n
// @lcpr case=end
 */

