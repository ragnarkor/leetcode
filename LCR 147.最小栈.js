/*
 * @lc app=leetcode.cn id=LCR 147 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 147] 最小栈
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * 题解：Goodnotes-包括min函数的栈
 */
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [] // 原栈
    this.minStack= []   // 辅助栈
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    // 原栈直接操作
    this.stack.push(x)
    
    const length = this.minStack.length
    if(!length){  // 最小栈初始化
        this.minStack.push(x)
    }else{  // 取最小栈顶端值，判断大小并更新
        const peak = this.minStack[length - 1]
        this.minStack.push(Math.min(peak, x))
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const length = this.stack.length
    if(!length) return
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const length = this.stack.length
    if(!length) return
    return this.stack[length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const length = this.minStack.length
    if(!length) return
    return this.minStack[length-1]
};
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end



/*
// @lcpr case=start
// ["MinStack","push","push","push","getMin","pop","top","getMin"][[],[-2],[2],[-3],[],[],[],[]]\n
// @lcpr case=end

 */

