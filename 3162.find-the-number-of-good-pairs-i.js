/*
 * @lc app=leetcode.cn id=3162 lang=javascript
 * @lcpr version=30204
 *
 * [3162] 优质数对的总数 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    // 统计nums1中能被k整除的数字及其出现次数
    const cnt1 = new Map()
    let max = 0
    for(const num of nums1){
        if(num % k === 0){
            const key = num / k | 0
            let cnt = cnt1.get(key) ?? 0  // ?? 空值合并运算符，将null/undefined转换成右侧操作数
            cnt1.set(key, ++cnt)
            max = Math.max(max, key)
        }
    }
    let ans = 0
    // 统计nums2中每个数字的出现次数
    const cnt2 = new Map()
    for(const num of nums2){
        cnt2.set(num, (cnt2.get(num) ?? 0) + 1)
    }
    // 计算cnt2的倍数
    for(const [num, cnt] of cnt2){
        let sum = 0
        for(let i = 1; num*i <= max; i++){
            sum += cnt1.get(num*i) ?? 0
        }
        ans += sum * cnt
    }
    return ans
};
/**
 * 思路：以nums2为主视角，在nums1中寻找nums2[i]的倍数
 *  1. 统计nums1中能被k整除（优化）的数字的个数cnt1
 *  2. 统计nums2中每个数字的个数（优化）cnt2
 *  3. 遍历cnt2，计算cnt2[i]*1,cnt2[i]*2,cnt2[i]*3...的值
 *      - 如果cnt2[i]的倍数在cnt1中，则相加
 *      - 由于cnt1中nums1/k，所以cnt2中不需要考虑k
 *  4. 时间复杂度n+m+lnm
 * 题解：https://www.bilibili.com/video/BV17t421N7L6/?vd_source=0803747abec14f63312f7ed860d78d60
 */
// @lc code=end



/*
// @lcpr case=start
// [1,3,4]\n[1,3,4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,4,12]\n[2,4]\n3\n
// @lcpr case=end

 */

