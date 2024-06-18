/*
 * @lc app=leetcode.cn id=LCR 124 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 124] 推理二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var deduceTree = function(preorder, inorder) {
    const inOrderHash = new Map()
    inorder.forEach((val, index) => inOrderHash.set(val, index))
    
    /**
     * 重建二叉树
     * @param {*} preLeft 前序数组左边界
     * @param {*} preRight 前序数组右边界
     * @param {*} inLeft 中序数组左边界
     * @param {*} inRight 中序数组右边界
     * @returns 
     */
    function buildTree(preLeft, preRight, inLeft, inRight){
      if(preLeft > preRight || inLeft > inRight)  // 当没有子节点的时候
        return null
  
      let preRoot = preLeft;  // 前序遍历的根节点就是左边界
      let inRoot = inOrderHash.get(preorder[preRoot])  // 寻找中序遍历的根节点位置
      const node = new TreeNode(preorder[preRoot]) // 创建根节点
  
      let leftSize = inRoot - inLeft // 得到左子树节点数目
      // 画图理解索引计算关系
      node.left = buildTree(preRoot+1, preRoot+leftSize, inLeft, inRoot-1)
      node.right = buildTree(preRoot+leftSize+1, preRight, inRoot+1, inRight)
      return node
    }
  
    return buildTree(0, preorder.length-1, 0, inorder.length-1)
  };
// @lc code=end

/**
 * 前序遍历为[根|左|右]
 * 中序遍历为[左|根|右]
 * 思路：
 * 1. 通过前序遍历确定根节点
 * 2. 在中序遍历中找到根节点索引，划分左右子树，完成重建
 */

/*
// @lcpr case=start
// [3,9,20,15,7]\n[9,3,15,20,7]\n
// @lcpr case=end

// @lcpr case=start
// [-1]\n[-1]\n
// @lcpr case=end

 */

