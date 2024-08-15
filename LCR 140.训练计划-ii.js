/*
 * @lc app=leetcode.cn id=LCR 140 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 140] 训练计划 II
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
 * @param {number} k
 * @return {ListNode}
 */
var trainingPlan = function(head, k) {
    // 快慢指针，先让快指针走k-1步，直接返回慢指针
    if(!head) return head
    let slow = head, fast = head
    while(fast && k){
        --k
        fast = fast.next
    }
    while(fast){
        fast = fast.next
        slow = slow.next
    }
    return slow
};
// @lc code=end



/*
// @lcpr case=start
// [2,4,7,8]\n1\n
// @lcpr case=end

 */

