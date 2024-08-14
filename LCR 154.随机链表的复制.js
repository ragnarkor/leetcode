/*
 * @lc app=leetcode.cn id=LCR 154 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 154] 复杂链表的复制
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */


// 拼接法
var copyRandomList = function(head) {
    if(!head) return head
    let cur = head
    while(cur){ // 复制生成新节点
        const newNode = new Node(cur.val)
        newNode.next = cur.next
        cur.next = newNode
        cur = newNode.next
    }

    cur = head
    while(cur){ // 生成新节点的random关系
        const newNode = cur.next
        const newRandom = cur.random ? cur.random.next : null   // 注意要指向新的随机节点，random可能为空
        newNode.random = newRandom
        cur = newNode.next
    }

    let pre = head  // 旧链表
    let newHead = head.next // 新链表
    cur = head.next
    while(cur.next){ // 删除旧节点的next关系
        pre.next = cur.next     // 复原原数组的关系
        pre = cur.next
        cur.next = pre.next
        cur = cur.next
    }
    pre.next = null //  修复原数组最后一个尾节点
    
    return newHead
}

// 哈希表
// var copyRandomList = function(head) {
//     if(!head) return head
//     const map = new Map()   // 哈希表存储节点指针
//     let cur = head
//     while(cur){
//         map.set(cur, new Node(cur.val))    // 复制产生新节点  
//         cur = cur.next
//     }

//     cur = head
//     while(cur){
//         const node = map.get(cur)
//         // 建立新节点关系（指向null时需特殊处理）
//         node.next = map.get(cur.next) || null
//         node.random = map.get(cur.random) || null
//         cur = cur.next
//     }

//     return map.get(head)   // 返回存储在哈希表中的头节点
// };
/**
 * 题解：Goodnotes-复杂链表的复制
 */
// @lc code=end




/*
// @lcpr case=start
// [[7,null],[13,0],[11,4],[10,2],[1,0]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,1],[2,1]]\n
// @lcpr case=end

// @lcpr case=start
// [[3,null],[3,0],[3,null]]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

