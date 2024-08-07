/*
 * @lc app=leetcode.cn id=LCR 143 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 143] 子结构判断
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
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {

};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
// 进入isSubStructure函数的A和B都不会是空树
function isSubStructure(A, B) {
    // B已经匹配结束，说明两棵树相等
    if(!B) return true
    // A为空，B不为空，说明B不是A的子结构
    if(!A || A.val !== B.val) return false
    // 开始检查A的左右子树是否是B的子结构
    return isSame(A.left, B.left) && isSame(A.right, B.right)
}
// @lc code=end



/*
// @lcpr case=start
// [1,7,5]\n[6,1]\n
// @lcpr case=end

// @lcpr case=start
// [3,6,7,1,8]\n[6,1]\n
// @lcpr case=end

 */

