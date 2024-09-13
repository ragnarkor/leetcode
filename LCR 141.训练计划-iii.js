/*
 * @lc app=leetcode.cn id=LCR 141 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 141] 训练计划 III
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
 * @return {ListNode}
 */
var trainningPlan = function(head) {
    // 法一：迭代法
    if(!head || !head.next) return head

    let cur = head
    let pre = null

    while(cur){
        let next = cur.next
        cur.next = pre  // 修改指针方向
        pre = cur   // 移动pre
        cur = next  // 移动cur
    }

    return pre

    // 法二：递归法
    // if(!head || !head.next){    // 特殊情况
    //     return head
    // }
    // const newHead = reverseList(head.next)  // 寻找尾节点作为反转后的头节点
    // head.next.next = head   // 修改下一节点的指向
    // head.next = null    // 修改该节点的指向（作为尾节点指向null）
    // return newHead
};
/**
 * 题解：Goodnotes-反转链表
 */
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

