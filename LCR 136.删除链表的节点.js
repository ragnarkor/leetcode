/*
 * @lc app=leetcode.cn id=LCR 136 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 136] 删除链表的节点
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    //特殊情况
    if(!head) return head
    // 头节点即要删除节点
    if(head.val === val) return head.next   
    let pre = null, cur = head
    while(cur){
        // 删除节点
        if(cur.val === val){
            pre.next = cur.next
            cur = cur.next
            break
        }
        // 不用删除节点则继续后移
        pre = cur
        cur = cur.next
    }
    return head
};
// @lc code=end



/*
// @lcpr case=start
// [4,5,1,9]\n5\n
// @lcpr case=end

// @lcpr case=start
// [4,5,1,9]\n1\n
// @lcpr case=end

 */

