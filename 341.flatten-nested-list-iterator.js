/*
 * @lc app=leetcode.cn id=341 lang=javascript
 * @lcpr version=30204
 *
 * [341] 扁平化嵌套列表迭代器
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    this.list = []
    const dfs = (nestedList) => {
        // 必须使用箭头函数，明确this的指代位置
        for(const nest of nestedList){
            if(nest.isInteger()){    // 整数直接加入数组
                this.list.push(nest.getInteger())
            }else{  // 嵌套数组递归遍历
                dfs(nest.getList())
            }
        }
    }
    dfs(nestedList)
};


/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    return this.list.length > 0   // list不为空则表明还能迭代
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.list.shift() // 弹出第一个元素
};


/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/
// @lc code=end



/*
// @lcpr case=start
// [[1,1],2,[1,1]]\n
// @lcpr case=end

// @lcpr case=start
// [1,[4,[6]]]\n
// @lcpr case=end

 */

