/*
 * @lc app=leetcode.cn id=2813 lang=javascript
 * @lcpr version=30203
 *
 * [2813] 子序列最大优雅度
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function(items, k) {
    // 按profit从大到小排序
    items.sort((a, b) => b[0]-a[0]) 
    let totalProfit = 0, ans = 0
    const visit = new Set() // 存放所有出现过一次元素的类别
    const duplicate = []    // 存放在visit中重复出现元素的利润
    for(let i = 0; i < items.length; i++){
        const [profit, category] = items[i]
        // 取前k大元素
        if(i < k){
            if(visit.has(category))  // 出现过一次
                duplicate.push(profit)
            else  // 没出现过
                visit.add(category)
            totalProfit += profit
        }
        // 考虑category，注意duplicate长度，如果duplicate为空说明已是最优解
        else if(duplicate.length > 0){  
            // 只有当category之前没选过，且替换重复元素时可选
            if(!visit.has(category)){
                visit.add(category) // 必选原因看解释
                totalProfit -= duplicate.pop()  // 去掉替换元素
                totalProfit += profit
            }
        }
        // 更新答案，取最大值（新加入的选项未必会比之前利润高）
        ans = Math.max(ans, totalProfit + visit.size ** 2)
    }
    return ans
};
// @lc code=end

/**
 * 先以profit为base，再考虑category会不会变大
 * 1. 按profit排序，选出前k大个元素
 * 2. 由于total_profit从大到小排序，后续操作不会让total_profit变大了，重点考虑distict_categories
 *  - 如果category之前选过，total_profit只会变小，排除
 *  - 如果category之前没选过，取最小profit替换
 *      1. 被替换的类别只有一个，distinct_category+1-1无变化，排除
 *      2. 被替换的类别有多个，distinct_category+1，必选
 *         必选原因：按照贪心思想，后面出现的选择profit更低，这个已经是最好选择
 * 3. 更新答案，取最大值（新加入的选项未必会比之前利润高）
 */

/*
// @lcpr case=start
// [[3,2],[5,1],[10,1]]\n2\n
// @lcpr case=end

// @lcpr case=start
// [[3,1],[3,1],[2,2],[5,3]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1],[3,1]]\n3\n
// @lcpr case=end

// @lcpr case=start
// [[1,2],[10,1]]\n1\n
// @lcpr case=end

 */

