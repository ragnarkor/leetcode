/*
 * @lc app=leetcode.cn id=3226 lang=javascript
 * @lcpr version=30204
 *
 * [3226] 使两个整数相等的位更改次数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
    if((n & k) !== k) return -1
    // 计算n^k中1的数量
    function bitCount(n){
        let count = 0
        while(n){
            // 获取最后一位判断是否为1
            count += ((n & 1) ^ 1 ? 0 : 1)
            n >>= 1
        }
        return count
    }
    return bitCount(n ^ k)
};
/**
 * 法一：逐位比较模拟
 * 法二：位运算
 *  - 判断n能否变为k：通过n&k判断k中值为1的位是否为n的子集
 *  - 计算更改次数：n^k后统计值为1的数量
 * 题解：https://leetcode.cn/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/2969568/shi-liang-ge-zheng-shu-xiang-deng-de-wei-bzfv/
 * 视频：https://www.bilibili.com/video/BV16Z421N7P2/?vd_source=0803747abec14f63312f7ed860d78d60
 */
// @lc code=end



/*
// @lcpr case=start
// 13\n4\n
// @lcpr case=end

// @lcpr case=start
// 21\n21\n
// @lcpr case=end

// @lcpr case=start
// 14\n13\n
// @lcpr case=end

// @lcpr case=start
// 15\n14\n
// @lcpr case=end
 */

