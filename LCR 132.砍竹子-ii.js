/*
 * @lc app=leetcode.cn id=LCR 132 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 132] 砍竹子 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var cuttingBamboo = function(n) {
    if(n < 4) return n - 1
    // 由数学推导可得绳子长度为3时能得到最大乘积
    const p = 1000000007n
    const x = n / 3 | 0, mod = n % 3
    
    if(mod === 0) return pow(3, x)   // 3的整数倍
    else if(mod === 1) return pow(3, x-1) * 4n % p  // 1与3拼成4时，所得乘积为4，大于1和3
    else return pow(3, x) * 2n % p  // 直接乘2返回

};

// 循环求余法：(x^a) % p 
function pow(x, a){
    let rem = 1n, p = 1000000007n
    while(a){
        rem = (rem * BigInt(x)) % p
        a--
    }
    return rem
}
// @lc code=end

/**
 * 题解：Goodnotes-大数求余
 * 题解：https://leetcode.cn/problems/jian-sheng-zi-ii-lcof/solutions/106190/mian-shi-ti-14-ii-jian-sheng-zi-iitan-xin-er-fen-f/
 */

/*
// @lcpr case=start
// 12\n
// @lcpr case=end

 */

