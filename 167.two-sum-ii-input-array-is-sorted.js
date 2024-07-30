/*
 * @lc app=leetcode.cn id=167 lang=javascript
 * @lcpr version=30204
 *
 * [167] 两数之和 II - 输入有序数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length - 1
    while(left < right){
      let temp = numbers[left] + numbers[right]
      if(temp === target)
        return [left+1, right+1]    // 下标从1开始
      else if(temp > target)
        right--
      else
        left++
    }
    return [-1, -1]
  };
// @lc code=end



/*
// @lcpr case=start
// [2,7,11,15]\n9\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4]\n6\n
// @lcpr case=end

// @lcpr case=start
// [-1,0]\n-1\n
// @lcpr case=end

 */

