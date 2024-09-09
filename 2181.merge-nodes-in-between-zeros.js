/*
 * @lc app=leetcode.cn id=2181 lang=javascript
 * @lcpr version=30204
 *
 * [2181] 合并零之间的节点
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
var mergeNodes = function(head) {
    let sum = head
    let cur = head.next
    while(cur.next){
        if(cur.val){    // 有值则累加到0节点中
            sum.val += cur.val
        }else{  // 遇到下一个0节点，重新开始计算
            sum.next = cur
            sum = sum.next
        }
        cur = cur.next
    }
    sum.next = null // 倒数第二个0节点接null
    return head
};
// @lc code=end



/*
// @lcpr case=start
// [0,3,1,0,4,5,2,0]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,3,0,2,2,0]\n
// @lcpr case=end

 */

