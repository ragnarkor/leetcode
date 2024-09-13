/*
 * @lc app=leetcode.cn id=198 lang=javascript
 * @lcpr version=30204
 *
 * [198] 打家劫舍
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // if(nums.length < 1)
    //   return 0;
    // // dp[i]表示到i屋能偷窃的最高金额
    // const dp = [];
    // // 初始化状态
    // dp[0] = nums[0];
    // dp[1] = Math.max(dp[0], nums[1]);
    // for(let i = 2; i < nums.length; i++){
    //   // dp[i]的状态分为打劫了i-1或者打劫了i-2
    //   dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
    // }
    // return dp[nums.length-1];
  
    // 使用滚动数组优化
    if(nums.length < 1)
      return 0;
    else if(nums.length < 2)
      return nums[0];
    
    // 初始化状态
    let first = nums[0];
    let second = Math.max(first, nums[1]);
    let result = Math.max(first, second);
    for(let i = 2; i < nums.length; i++){
      // dp[i]的状态分为打劫了i-1或者打劫了i-2
      result = Math.max(second, first+nums[i]);
      first = second;
      second = result;
    }
    return result;
  };
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [2,7,9,3,1]\n
// @lcpr case=end

 */

