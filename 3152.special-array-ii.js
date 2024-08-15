/*
 * @lc app=leetcode.cn id=3152 lang=javascript
 * @lcpr version=30204
 *
 * [3152] 特殊数组 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function(nums, queries) {
    // 多填充一个s[0]
    const s = new Array(nums.length).fill(0)
    // 计算前缀和
    for(let i = 1; i < nums.length; i++){
        let add = (nums[i-1] + nums[i]) % 2 ? 0 : 1 
        s[i] = s[i-1] + add
    }
    // 判断queries结果
    const res = new Array(queries.length)
    for(let i = 0; i < queries.length; i++){
        let [from, to] = queries[i]
        
        res[i] = s[to] === s[from]
    }

    return res
};

/**
 * 思路：
 * 1. 用a[i]表示两个数字间逗号前后的奇偶性
 *  - a[i]=0表示奇偶性相同；a[i]=1表示奇偶性不同
 *  - 对于nums=[4,3,1,6]，有a=[0,1,0]
 * 2. queries=[from, to]即为a[from, to-1]的奇偶性
 *  - 此时queries[2,3]对应a[2]的奇偶性
 *  - ∑a[2,2]=0则表明queries奇偶性相同
 * 3. 为简化求和过程，可以用s[i]记录a[0,i]之和
 *  - queries[from, to]即为s[to-1]-s[from]之差
 * 题解：https://www.bilibili.com/video/BV19D421G7mw/?vd_source=0803747abec14f63312f7ed860d78d60
 */
// @lc code=end



/*
// @lcpr case=start
// [3,4,1,2,6]\n[[0,4]]\n
// @lcpr case=end

// @lcpr case=start
// [4,3,1,6]\n[[0,2],[2,3]]\n
// @lcpr case=end

 */

