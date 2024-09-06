/*
 * @lc app=leetcode.cn id=LCR 156 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 156] 序列化与反序列化二叉树
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const res = []
    function encode(root){
        if(!root){
            res.push('#')
        }
        else{
            // 根据数据流特点，反序列化时先获得根节点最重要，采取中序遍历
            res.push(root.val)
            encode(root.left)
            encode(root.right)
        }
    }
    encode(root)
    return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const val = data.split(',')
    //需要递归构建二叉树，使用迭代器遍历数据流
    const iterator = val[Symbol.iterator]() // array内置默认的迭代器行为

    function decode(){
        const res = iterator.next()
        if(res.value === '#') return null
        const root = new TreeNode(Number(res.value))
        // 根据数据流继续构建左右子树
        root.left = decode()
        root.right = decode()
        return root
    }

    return decode()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
/**
 * 题解：Goodnotes-序列化二叉树
 */
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,null,null,4,5]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

 */

