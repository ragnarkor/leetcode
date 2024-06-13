/*
 * @lc app=leetcode.cn id=LCR 123 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 123] 图书整理 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reverseBookList = function(head) {
    if(!head) return []   // 特殊情况

    let res = []
    // 递归终止条件：到达尾部
    if(!head.next){ 
        res.push(head.val)
        return res
    }

    while(head.next){   // 寻找尾节点
        res=[...reverseBookList(head.next), head.val]
        return res
    }
    
};
// @lc code=end



/*
// @lcpr case=start
// [3,6,4,1]\n
// @lcpr case=end

 */

