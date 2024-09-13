/*
 * @lc app=leetcode.cn id=102 lang=javascript
 * @lcpr version=30204
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root)
      return [];
    
    const queue = [root];
    const result = [];
    while(queue.length){
      let levelSize = queue.length;
      const subRes = [];
      for(let i = 0; i < levelSize; i++){
        let node = queue.shift();
        subRes.push(node.val);
  
        if(node.left)
          queue.push(node.left);
        if(node.right)
          queue.push(node.right);
      }
      result.push(subRes);
    }
  
    return result;
  };
// @lc code=end



/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

