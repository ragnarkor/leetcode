/*
 * @lc app=leetcode.cn id=2982 lang=javascript
 * @lcpr version=30202
 *
 * [2982] 找出出现至少三次的最长特殊子字符串 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function(s) {
    const map = new Map()   // 分组统计，格式为"a":[l1,l2,l3]
    let cnt = 0 // 统计子字符串长度
    for(let i = 0; i < s.length; i++){
        cnt++
        // 子字符串结束时加入计数结果
        if(s[i] !== s[i+1]){ 
            const list = map.get(s[i]) || []
            map.set(s[i], [...list, cnt])
            cnt = 0 // 重新计数
        } 
    }
    // 寻找最长的特殊子字符串
    let res = 0
    for(let [key, value] of map){
        value.sort((a, b) => b - a)  // 降序排列
        const [l1, l2, l3] = [...value, 0, 0]   // 避免l2、l3为空
        res = Math.max(res, l1 - 2, Math.min(l1 - 1, l2), l3)
    }
    return res ? res : -1
};
// @lc code=end

/**
 * 先分类统计各字符串长度，对于字符a，特殊子字符串情况：
 *  1. 如果最长子字符串长度为l1：
 *      可以拆分出3个(l1-2)长度的子字符串
 *      如"aaaa"可以拆分成"aa aa"、"a aa a"、"aa aa"
 *  2. 如果第二长子字符串长度为l2：
 *      1. 如果l1>l2，可以拆分出3个l2的子字符串
 *      如"aaaa"和"a"
 *      2. 如果l1=l2，可以拆分出3个(l1-1)的子字符串
 *      如"aaaa"和"aaaa"可以拆分成"aaa a"、"a aaa"、"a aaa"
 *      合并两种情况，即min(l1-1, l2)   <------ 神来之笔？
 *  3. 如果第三长子字符串长度为l3：
 *      可以拆分成3个l3长度的子字符串
 * 最后三种情况取最大值，即最长的特殊子字符串max(l1-2, min(l1-1, l2), l3)
 * 视频讲解：https://www.bilibili.com/video/BV1XG411B7bX/?t=1m44s&vd_source=0803747abec14f63312f7ed860d78d60
 */


/*
// @lcpr case=start
// "aaaa"\n
// @lcpr case=end

// @lcpr case=start
// "abcdef"\n
// @lcpr case=end

// @lcpr case=start
// "abcaba"\n
// @lcpr case=end

 */

