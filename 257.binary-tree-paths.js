/*
 * @lc app=leetcode.cn id=257 lang=javascript
 * @lcpr version=30204
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // if(!root)
    //   return [];
    // const paths = [];
    // const node_queue = [root];
    // const path_queue = [root.val.toString()];
  
    // while(node_queue.length){
    //   const node = node_queue.shift();
    //   const path = path_queue.shift();
  
    //   if(!node.left && !node.right){
    //     paths.push(path);
    //   }else{
    //     if(node.left){
    //       node_queue.push(node.left);
    //       path_queue.push(path + '->' + node.left.val.toString());
    //     }
    //     if(node.right){
    //       node_queue.push(node.right);
    //       path_queue.push(path + '->' + node.right.val.toString());
    //     }
    //   }
    // }
  
    // return paths;
  
    const paths = [];
    const dfs = (root,path) => {
      if(!root)
        return;
  
      if(!root.right && !root.left){
        paths.push(path + root.val.toString());
        return;
      }
  
      dfs(root.left,path + root.val.toString() + '->');
      dfs(root.right,path + root.val.toString() + '->');
    }
  
    dfs(root,"");
    return paths;
  };

/**
 * 题解：Goodnotes-二叉树的所有路径
 */
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,null,5]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

 */

