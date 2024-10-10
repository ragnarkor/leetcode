/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 * @lcpr version=30204
 *
 * [1436] 旅行终点站
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    // 生成起点集合
    const city = new Set(paths.map(path => path[0]))
    // 判断终点是否在起点集合里
    for(const path of paths)
        if(!city.has(path[1]))
            return path[1]
};
/**
 * 思路：先将所有路径的起点用一个哈希表存储下来，再判断所有路径的终点是否为起点。
 * 题解：https://leetcode.cn/problems/destination-city/solutions/2942491/javapython3cmei-ju-ha-xi-biao-zhao-dao-b-c6os/
 */
// @lc code=end



/*
// @lcpr case=start
// [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]\n
// @lcpr case=end

// @lcpr case=start
// [["B","C"],["D","B"],["C","A"]]\n
// @lcpr case=end

// @lcpr case=start
// [["A","Z"]]\n
// @lcpr case=end

 */

