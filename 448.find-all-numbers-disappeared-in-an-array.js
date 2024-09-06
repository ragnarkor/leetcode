/*
 * @lc app=leetcode.cn id=448 lang=javascript
 * @lcpr version=30204
 *
 * [448] 找到所有数组中消失的数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const res = []
    for(let i = 0; i < nums.length; i++){
        const num = Math.abs(nums[i])
        if(nums[num-1] > 0) // 避免重复标记
            nums[num-1] *= -1   // 标记num出现过
    }
    // 通过判断哪些数字为正数，读取索引值+1，即为没访问过的数字
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > 0)
            res.push(i+1)
    }

    return res
};
/**
 * 法一：Map/Set/数组记录出现过的数字
 * 法二：原地修改数组
 *  - 利用索引和数字的关系，将遍历过的数字索引 * -1
 *  - 再通过判断哪些数字为正数，读取他们的索引值+1，即为返回结果
 * 题解：https://leetcode.cn/problems/find-all-numbers-disappeared-in-an-array/solutions/602212/yi-zhang-dong-tu-bang-zhu-li-jie-yuan-di-uign/
 */
// @lc code=end



/*
// @lcpr case=start
// [4,3,2,7,8,2,3,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,1]\n
// @lcpr case=end

 */

