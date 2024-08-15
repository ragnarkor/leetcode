/*
 * @lc app=leetcode.cn id=LCR 131 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 131] 砍竹子 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var cuttingBamboo = function(n) {
    // 动态规划法
    const dp = new Array(n+1).fill(0)
    for(let i = 2; i < n+1; i++){
        // 一共有i-j种剪法
        for(let j = 1; j < i; j++){
            // i-j分剪/不剪，取最大值
            dp[i] = Math.max(dp[i], j * Math.max(dp[i-j], i-j))
        }
    }
    return dp[n]

    // if(n < 4) return n - 1
    // // 由数学推导可得绳子长度为3时能得到最大乘积
    // const x = n / 3 | 0, y = n % 3
    // if(y === 0) return 3 ** x   // 3的整数倍
    // else if(y === 1) return 3 ** (x-1) * 4  // 1与3拼成4时，所得乘积为4，大于1和3
    // else return 3 ** x * 2  // 直接乘2返回
};

/**
 * 法一：动态规划
 * 1.d[n]表示长度为n的绳子剪成m段后的最大乘积
 * 2.d[n]至少剪一刀i，剩下绳子长度n-i，d[n] = max( i * max(d[n-i], n-i ), i = 1,2,…,n-1 
 * 3.d[0]=0, d[1]=0
 * 4.从前往后遍历
 * 时间复杂度O(n^2)，空间复杂度O(n)
 * 题解：Goodnotes-动态规划·剪绳子
 */
// @lc code=end



/*
// @lcpr case=start
// 12\n
// @lcpr case=end

 */

