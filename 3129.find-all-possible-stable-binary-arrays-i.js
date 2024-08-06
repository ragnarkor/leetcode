/*
 * @lc app=leetcode.cn id=3129 lang=javascript
 * @lcpr version=30204
 *
 * [3129] 找出所有稳定的二进制数组 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
const MOD = 10 ** 9 + 7
var numberOfStableArrays = function(zero, one, limit) {
    // 其中[-1, -1]表示末位为0/1的值，默认为-1，即无计算结果
    const memo = Array.from({ length: zero + 1 }, () =>
        Array.from({ length: one + 1 }, () => [-1, -1])
    )
    /**
     * 用i个0和j个1构建稳定数组
     * @param {number} i 0的数量
     * @param {number} j 1的数量
     * @param {number} k 稳定数组末位数字
     * @returns {number} 稳定数组数量
     */
    function dfs(i, j, k){
        // 递归边界条件
        if(i === 0)
            return k === 1 && j <= limit    // 只有一种情况
        if(j === 0) 
            return k === 0 && i <= limit
        if(memo[i][j][k] === -1){   // memo中无计算结果
            let res  = 0
            if(k === 0) {   // 根据k计算返回数组数量
                res = (dfs(i-1, j, 1) + dfs(i-1, j, 0)) % MOD
                if(i > limit)
                    res = (res - dfs(i-limit-1, j, 1) + MOD) % MOD  // 加上MOD确保结果为正数
            }else {
                res = (dfs(i, j-1, 0) + dfs(i, j-1, 1)) % MOD
                if(j > limit)
                    res = (res - dfs(i, j-limit-1, 0) + MOD) % MOD
                    
            }
            memo[i][j][k] = res % MOD  // 记录结果到memo中
        }
        return memo[i][j][k] % MOD
    }

    return (dfs(zero, one, 0) + dfs(zero, one, 1)) % MOD
};
// @lc code=end

/**
 * 思路：记忆化搜索
 * 1. 固定最后一位为0/1，倒推前面位的组合方式
 *  - 问题描述为dfs(i, j, k)，其中k表示末位数字
 * 2. 设最后一位为0，则前面n-1位变成i-1个0和j个1之间的排列组合，根据limit分析：
 *  - n-1位为1，子问题为dfs(i-1, j, 1)
 *  - n-1位为0，子问题中需去除掉dfs(i-limit-1, j, 1)的情况，即为dfs(i-1, j, 0)-dfs(i-limit-1, j, 1)
 * 3. 总数目=dfs(i, j, 0) + dfs(i, j, 1)
 * 4. 直接递推会超时，需引入memo
 * 题解：https://www.bilibili.com/video/BV16t421c7GB/?vd_source=0803747abec14f63312f7ed860d78d60
 */

/*
// @lcpr case=start
// 1\n1\n2\n
// @lcpr case=end

// @lcpr case=start
// 1\n2\n1\n
// @lcpr case=end

// @lcpr case=start
// 3\n3\n2\n
// @lcpr case=end

 */

