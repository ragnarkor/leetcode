/*
 * @lc app=leetcode.cn id=LCR 193 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 193] 二叉搜索树的最近公共祖先
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
    while(root){
        // p、q都位于左子树
        if(p.val < root.val && q.val < root.val) root = root.left
        // p、q都位于右子树
        else if(p.val > root.val && q.val > root.val) root = root.right
        // p、q一左一右
        else break
    }
    return root
};
/**
 * 二叉搜索树：左子节点<根节点<右子节点
 * 题解：Goodnotes-二叉搜索树的最近公共祖先
 */
// @lc code=end



/*
// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n8\n
// @lcpr case=end

// @lcpr case=start
// [6,2,8,0,4,7,9,null,null,3,5]\n2\n4\n
// @lcpr case=end

 */

