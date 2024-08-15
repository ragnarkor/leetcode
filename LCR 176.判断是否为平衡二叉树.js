/*
 * @lc app=leetcode.cn id=LCR 176 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 176] 判断是否为平衡二叉树
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
var isBalanced = function(root) {
    function getHeightDiff(root){
        if(!root) return 0
        let left = getHeightDiff(root.left), right = getHeightDiff(root.right)
        // 左右子树不平衡/高度差>1则返回
        if(left < 0 || right < 0 || Math.abs(left - right) > 1) return -1
        return Math.max(left,right) + 1 // 否则正常返回高度
    }
    return getHeightDiff(root) >= 0
};
/**
 * 题解：Goodnotes-平衡二叉树·平衡二叉树
 */
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,3,3,null,null,4,4]\n
// @lcpr case=end

 */

