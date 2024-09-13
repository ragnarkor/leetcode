/*
 * @lc app=leetcode.cn id=232 lang=javascript
 * @lcpr version=30204
 *
 * [232] 用栈实现队列
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.inStack = [];  // 输入栈，压入push传入数据
    this.outStack = []; // 输出栈，用于pop和peek操作
  };
  
  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
  };
  
  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  MyQueue.prototype.pop = function() {
    // 输出栈为空，则将输入栈弹出
    if(!this.outStack.length)
      this.in2out();
    // 此时栈顶即为队首元素
    return this.outStack.pop();
  
  };
  
  /**
   * Get the front element.
   * @return {number}
   */
  MyQueue.prototype.peek = function() {
    if(!this.outStack.length)
      this.in2out();
    return this.outStack[this.outStack.length - 1];
  };
  
  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  MyQueue.prototype.empty = function() {
    return !(this.inStack.length || this.outStack.length);  // 当输入栈和输出栈都为空则空
  };
  
  MyQueue.prototype.in2out = function() {
    while(this.inStack.length){
      this.outStack.push(this.inStack.pop()); // 将输入栈转移到输出栈
    }
  };
  

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end



/*
// @lcpr case=start
// ["MyQueue", "push", "push", "peek", "pop", "empty"][[], [1], [2], [], [], []]\n
// @lcpr case=end

 */

