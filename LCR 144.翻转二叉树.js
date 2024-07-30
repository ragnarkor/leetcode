/*
 * @lc app=leetcode.cn id=LCR 144 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 144] 翻转二叉树
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
 * @return {TreeNode}
 */

// 递归法
// var mirrorTree = function(root) {
//     if(!root) return null;
//     [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)];
//     return root
// };

// BFS遍历法
var mirrorTree = function(root) {
    if(!root) return root
    const newRoot = {...root}    // 浅复制根节点
    const queue = [newRoot]
    while(queue.length){
        const node = queue.shift()
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
        // 左右子节点交换位置
        let temp = node.left
        node.left = node.right
        node.right = temp
    }
    return newRoot
};
// @lc code=end



/*
// @lcpr case=start
// [5,7,9,8,3,2,4]\n
// @lcpr case=end

 */

