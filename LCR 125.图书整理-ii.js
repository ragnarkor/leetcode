/*
 * @lc app=leetcode.cn id=LCR 125 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 125] 图书整理 II
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var CQueue = function() {
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(!this.outStack.length){ // 输出栈没有元素时
        if(!this.inStack.length){  // 输入栈也没有元素，返回-1
            return -1   
        }
        // 从输入栈中补充输出栈元素
        while(this.inStack.length){ // 不能使用for循环，inStack.length会改变
            this.outStack.push(this.inStack.pop())
        }
    }
    return this.outStack.pop()
};


/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
// @lc code=end



/*
// @lcpr case=start
// ["BookQueue", "push", "push", "pop"][[], [1], [2], []]\n
// @lcpr case=end

 */

