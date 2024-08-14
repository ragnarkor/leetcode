/*
 * @lc app=leetcode.cn id=面试题 17.19 lang=javascript
 * @lcpr version=30203
 *
 * [面试题 17.19] 消失的两个数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var missingTwo = function(nums) {
    const n = nums.length + 2
    // 计算xor
    let xor = 0
    for(let i = 0; i < nums.length; i++)
        xor ^= nums[i]
    for(let i = 1; i <= n; i++)
        xor ^= i
    
    // 找到xor最右边的1
    let l = xor & (-xor)
    
    // 将原数组分为两堆，找缺失数字
    let x1 = 0, x2 = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] & l) x1 ^= nums[i]
        else x2 ^= nums[i]
    }
    for(let i = 1; i <= n; i++){
        if(i & l) x1 ^= i
        else x2 ^= i
    }
    return [x1, x2]
};
/**
 * 位运算，核心思想 x ^ x = 0，0 ^ x = x
 *  1. 在原数组后面添加1~n，数组长度扩充为2n-2
 *      - 注意题目要求O(1)空间，故改为用
 *  2. 原数组按位异或，得出x1 ^ x2的值xor
 *      - (-xor)为xor按位取反+1，故xor&(-xor)可以找到xor和-xor的差异点l，即+1的位置
 *  3. 按照n二进制位从右往左第一个为1的位置，将原数组分为两堆
 *      - n & l 可以判断 n 的第l位是否为1
 *  4. 两堆分别异或，得出各自缺失数字
 */
// @lc code=end



/*
// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1, 2, 3, 4, 6, 7, 9, 10]\n
// @lcpr case=end

 */

