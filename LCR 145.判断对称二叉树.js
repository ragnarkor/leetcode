/*
 * @lc app=leetcode.cn id=LCR 145 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 145] 判断对称二叉树
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
 * @return {boolean}
 */
var checkSymmetricTree = function(root) {
    if(!root) return true   // 空树
    if(!root.left && !root.right) return true   // 没有子节点
    // 判断左子树和右子树是否对称
    return isMirror(root.left,root.right)
};

function isMirror(left, right){
    if(!left && !right) return true     // 没有子节点
    if((left && !right) || (!left && right)) return false   // 只有左子树/右子树
    if(left.val !== right.val) return false     // 根节点的值不同
    // left的左子树与right的右子树相同 && left的右子树与right的左子树相同 时，两棵二叉树对称
    return isMirror(left.left, right.right) && isMirror(left.right, right.left)
}
/**
 * 题解：Goodnotes-对称二叉树
 */
// @lc code=end



/*
// @lcpr case=start
// [6,7,7,8,9,9,8]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,null,3,null,3]\n
// @lcpr case=end

 */

