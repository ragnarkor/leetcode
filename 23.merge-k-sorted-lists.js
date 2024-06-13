/*
 * @lc app=leetcode.cn id=23 lang=javascript
 * @lcpr version=30203
 *
 * [23] 合并 K 个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // 初始化优先队列
    const pq = new myPriorityQueue()
    for(const list of lists)
        if(list) pq.enqueue(list) // list可能为空

    // 弹出最小节点直至优先队列为空
    const head = new ListNode(-1, null)
    let cur = head
    while(!pq.isEmpty()){
        // 弹出最小节点
        cur.next = pq.dequeue()  
        cur = cur.next 
        // 存入下一个节点
        if(cur.next) pq.enqueue(cur.next)
    }
    return head.next
};

/**
 * 1. 将k个链表的链表头存入优先队列中
 * 2. 每弹出一个最小节点，将它的下一个节点存入优先队列中
 */

/**
 * 优先队列
 * 用这个方法时间复杂度为O(n)，用最小堆可将时间复杂度优化为O(log n)
 */
class myPriorityQueue {
    constructor() {
        this.queue = [];
    }

    /**
     * 插入新元素
     * @param {*} node 
     */
    enqueue(node) {
        if (this.isEmpty()){ //  优先队列为空直接插入
            this.queue.push(node)
        }else{
            for (let i = 0; i < this.queue.length; i++) {
                if (node.val < this.queue[i].val) {
                    this.queue.splice(i, 0, node)
                    return
                }
            } 
            // 没有找到插入位置，直接插入队尾
            this.queue.push(node)
        }
    }

    /**
     * 弹出最小元素
     * @returns 
     */
    dequeue() {
        if (this.isEmpty()) return
        return this.queue.shift()
    }

    /**
     * 判断队列是否为空
     * @returns 
     */
    isEmpty() {
        return !this.queue.length
    }
}

// @lc code=end



/*
// @lcpr case=start
// [[1,4,5],[1,3,4],[2,6]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [[]]\n
// @lcpr case=end

 */
