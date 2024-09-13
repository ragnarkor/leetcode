/*
 * @lc app=leetcode.cn id=199 lang=javascript
 * @lcpr version=30204
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root)
      return [];
  
    const node_queue = [root];
    const result = [];
    while(node_queue.length){ // BFS
      let size = node_queue.length;
      result.push(node_queue[size-1].val);  // 结果为每一层的最右侧元素
      for(let i = 0; i < size; i++){
        let node = node_queue.shift();
        if(node.left)
          node_queue.push(node.left);
        if(node.right)
          node_queue.push(node.right);
      }
    }
    return result;
  };
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,null,5,null,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,3]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

