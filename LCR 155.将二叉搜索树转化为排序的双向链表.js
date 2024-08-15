/*
 * @lc app=leetcode.cn id=LCR 155 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 155] 将二叉搜索树转化为排序的双向链表
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if(!root) return // 空树特殊处理
    let head = null, pre = null
    function inOrder(cur){
        if(!cur) return // 到达叶子节点
        inOrder(cur.left)
        // 第一个到达的节点为头节点
        pre || (head = cur)  
        // 修改成双向链表
        cur.left = pre
        pre && (pre.right = cur)    // 头节点做特殊处理
        // pre指针向后移动
        pre = cur
        inOrder(cur.right)
    }
    inOrder(root)
    // 首尾相连
    head.left = pre
    pre.right = head

    return head
};

/**
 * 题解：Goodnotes-回溯法/二叉树·BST与双向链表
 */
// @lc code=end



/*
// @lcpr case=start
// [4,2,5,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

