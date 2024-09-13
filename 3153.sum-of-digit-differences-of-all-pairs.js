/*
 * @lc app=leetcode.cn id=3153 lang=javascript
 * @lcpr version=30204
 *
 * [3153] 所有数对中数位不同之和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumDigitDifferences = function(nums) {
    // 统计数组中每一位0～9出现次数
    const cnt = Array.from({length: nums[0].toString().length}, () => new Array(10).fill(0))
    let res = 0
    for(let i = 0; i < nums.length; i++){
        const num = nums[i].toString()
        for(let j = 0; j < cnt.length; j++){
            res += i - cnt[j][num[j]]   // 该位上不同数位之和累加
            cnt[j][num[j]]++ // 第j位的出现次数
        }
    }
    return res
};
/**
 * 思路：
 * 1. 单独计算个/十/百……位数中的不同数对个数
 * 2. 遍历一次，如果前面有i个数字，其中j位上有k个数与当前数字相同
 *  那么不同数位之和的数量为i-cnt[k]
 * 视频：https://www.bilibili.com/video/BV19D421G7mw/?vd_source=0803747abec14f63312f7ed860d78d60
 */
// @lc code=end



/*
// @lcpr case=start
// [13,23,12]\n
// @lcpr case=end

// @lcpr case=start
// [10,10,10,10]\n
// @lcpr case=end

 */

