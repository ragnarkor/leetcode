/*
 * @lc app=leetcode.cn id=21 lang=javascript
 * @lcpr version=30203
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 迭代
    // const result = new ListNode(-1);
    // let pointer = result;
    // while(l1 && l2){
    //     if(l1.val <= l2.val){
    //         pointer.next = l1;
    //         l1 = l1.next;
    //     }else{
    //         pointer.next = l2;
    //         l2 = l2.next;
    //     }
    //     pointer = pointer.next;
    // }
    // pointer.next = l1 ? l1 : l2;
    // return result.next;

    // 递归
    if(!l1)
        return l2;
    if(!l2)
        return l1;
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l2.next,l1);
        return l2;
    }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */

