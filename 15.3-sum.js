/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * @lcpr version=30204
 *
 * [15] 三数之和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b)
    const res = []
    for(let i = 0; i < nums.length-2; i++){
        // i向右移动时跳过重复数字
        if(i > 0 && nums[i] === nums[i-1]) continue
        let j = i+1, k = nums.length-1
        while(j < k){
            let sum = nums[i] + nums[j] + nums[k]
            if(sum < 0){
                while(j < k && nums[j] === nums[++j]);   // 妙！跳过重复数字
            }else if(sum > 0){
                while(j < k && nums[k] === nums[--k]);  // 一定是--k而不能是k--，即需要先比较看是否重复，再对k进行操作
            }
            else{   // 获取到三元组
                res.push([nums[i], nums[j], nums[k]])
                while(j < k && nums[j] === nums[++j]); 
                while(j < k && nums[k] === nums[--k]);
            }
        }
    }
    return res
};
// @lc code=end

/**
 * 参考两数之和，可以使用双指针优化三数之和
 * 1. 排序数组（三元组顺序不重要，排序数组不影响结果）
 * 2. 固定一个最小元素i，双指针j,k设置在数组nums[i, length-1]两端
 * 3. 移动i到length-3的位置，j+k按两数之和的方法遍历寻找target为-i的值
 *  - sum = nums[i] + nums[j] + nums[k]
 *  - 由于三元组不能重复，所以i,j,k移动时都要跳过重复值
 *  - s = 0，记录三元组结果，j向右移动，k向左移动
 *  - s < 0，j向右移动
 *  - s > 0，k向左移动
 * 4. 特殊情况优化（优化不优化好像也无所谓）
 *  - i>0，sum必定>0，停止遍历i
 *  - i+nums[i+1]>0，sum必定>0，停止遍历i
 *  - i+nums[i+1]+nums[i+2]>0，停止遍历i
 *  - i+j+k<0，向右移动i
 */

/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */

