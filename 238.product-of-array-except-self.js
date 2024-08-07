/*
 * @lc app=leetcode.cn id=238 lang=javascript
 * @lcpr version=30204
 *
 * [238] 除自身以外数组的乘积
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length
    const res = new Array(n).fill(1)
    // 左乘积数组
    for(let i = 1; i < n; i++)
        res[i] = res[i-1] * nums[i-1]
    // 右乘积
    let right = 1
    for(let i = n-2; i >=0; i--){
        right *= nums[i+1]
        res[i] *= right
    }
    return res
};
// @lc code=end

/**
 * 思路：要求O(n)时间复杂度且不能用除法，排除暴力法求数组乘积（该方法在数组中有0时也会失效）
 * 1. 考虑使用左右乘积数组，对于nums[i]，L[i]为[0, i-1]的乘积，R[i]为[i, n-1)的乘积
 * 2. 初始化L[0]为1，从左往右遍历，计算出左乘积数组L
 * 3. 初始化R[n-1]为1，从右往左遍历，计算出右乘积数组R
 * 4. res[i] = L[i] * R[i]
 * 优化：
 * 3. 初始化R = 1
 * 4. 从右往左遍历，更新R，L[i] = L[i] * R即为返回结果
 * 此时L[i]作为返回结果不算空间复杂度，空间复杂度为O(1)
 * 题解：https://leetcode.cn/problems/product-of-array-except-self/solutions/272369/chu-zi-shen-yi-wai-shu-zu-de-cheng-ji-by-leetcode-/
 */

/*
// @lcpr case=start
// [1,2,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [-1,1,0,-3,3]\n
// @lcpr case=end

 */

