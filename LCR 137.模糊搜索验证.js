/*
 * @lc app=leetcode.cn id=LCR 137 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 137] 模糊搜索验证
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var articleMatch = function(s, p) {
    const n = s.length, m = p.length
    const dp = new Array(n+1).fill(0).map(() => new Array(m+1).fill(false))
    dp[0][0] = true     // s,p均为空时匹配成功

    for(let i = 0; i < n+1; i++){
        for(let j = 1; j < m+1; j++){   // p不为空串时
            // p为*时，p至少要有两位
            if(p[j-1] === '*' && j >=2){
                // 重复0次
                dp[i][j] |= dp[i][j-2]  // 既可能出现0次又可能出现n次，有一个为true就行，故取或值
                // 重复n次
                if(i >= 1)  // i至少要有1位才能重复n次
                    if(p[j-2] === '.' || p[j-2] === s[i-1])
                        dp[i][j] |= dp[i-1][j]  // 表明两种情况取或
            } 
            // p不为*时(即p为A或.)，i至少要有一位
            if(p[j-1] !== '*' && i >= 1)
                if(p[j-1] === '.' || p[j-1] === s[i-1])
                    dp[i][j] = dp[i-1][j-1]
        }
    }
    
    return dp[n][m]
};
/**
 * 思路：
 * 1. S[0~i-1]表明S的前i个字符，P[0~j-1]表明P的前j个字符
 *  - 分类讨论Pm=字母/./*三种情况下，Sn与Pm的递推关系
 * 2. 定义问题为dp[i][j]，表明S[0~i-1]与P[0~j-1]是否匹配
 *  - 将Sn与Pm的递推关系归类总结为dp的递推关系
 * 3. dp[i][j]初始化为false，dp[0][0]=true
 * 题解：Goodnotes-动态规划·正则表达式的匹配
 */
// @lc code=end



/*
// @lcpr case=start
// "aa"\n"a"\n
// @lcpr case=end

// @lcpr case=start
// "aa"\n"a*"\n
// @lcpr case=end

// @lcpr case=start
// "ab"\n".*"\n
// @lcpr case=end

 */

