/*
 * @lc app=leetcode.cn id=124 lang=javascript
 * @lcpr version=30203
 *
 * [124] 二叉树中的最大路径和
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let res = Number.MIN_SAFE_INTEGER
    function dfs(root){
        // 到叶子节点
        if(!root)  return 0
        let left = dfs(root.left)
        let right = dfs(root.right)
        // 更新最大路径和
        res = Math.max(res, left + right + root.val)
        // 选取拥有最长路径的子树返回
        return Math.max(Math.max(left, right)+root.val, 0)  // 神来之笔，详看注解
    }
    dfs(root)
    return res
};

/**
 * 最大路径和 = （左子树最大路径和 + 右子树最大路径和）+ 当前节点值
 * 注解：Math.max(Math.max(left, right)+root.val, 0)  
 * 1.最长路径如果为负数则不选择，0表示不选择为负数的节点
 * 2.对于全是负数的树，最长的路径只包括一个节点，即最小负数值
 */
// @lc code=end



/*
// @lcpr case=start
// [2,-1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [-10,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [-10,-9,-20,null,null,-15,-7]\n
// @lcpr case=end

 */

