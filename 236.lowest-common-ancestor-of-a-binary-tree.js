/*
 * @lc app=leetcode.cn id=236 lang=javascript
 * @lcpr version=30202
 *
 * [236] 二叉树的最近公共祖先
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 遍历到叶子节点/p/q时停止
    if(!root || root === p || root === q) return root
    let left = lowestCommonAncestor(root.left, p, q)  // 在左子树查找p/q
    let right = lowestCommonAncestor(root.right, p, q)  
    if(!left) return right  // p/q不在左子树，回溯右子树
    if(!right) return left
    return root // p、q在root两侧，root为公共节点
};

/*
*   最近公共祖先的情况：
*   1. p、q在root两侧
*   2. p=root，q在p的子树
*   3. q=root，p在q的子树
*/
// @lc code=end



/*
// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n1\n
// @lcpr case=end

// @lcpr case=start
// [3,5,1,6,2,0,8,null,null,7,4]\n5\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n2\n
// @lcpr case=end

 */

