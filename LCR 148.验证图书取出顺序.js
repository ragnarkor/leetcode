/*
 * @lc app=leetcode.cn id=LCR 148 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 148] 验证图书取出顺序
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateBookSequences = function(pushed, popped) {
    const stack = []
    let index = 0
    for(let push of pushed){
        // 入栈
        stack.push(push)
        // popped与栈顶元素相同，则将栈顶元素弹出
        while(stack.length && popped[index] === stack[stack.length-1]){
            stack.pop()
            index++
        }
    }
    // 元素全部出栈，即顺序正确
    return !stack.length
};
// 啰里八嗦思路版：
// var validateStackSequences = function(pushed, popped) {
//     if(!pushed.length) return true
//     const stack = []
//     let push = pop = 0
//     // 入栈
//     while(push < pushed.length){
//         // 比较popped与栈顶元素，相同则将栈顶元素弹出
//         if(popped[pop] === stack[stack.length-1]){
//             stack.pop()
//             pop++
//         }
//         // 不同则将push入栈
//         else{
//             stack.push(pushed[push])
//             push++
//         }
//     }
//     // 出栈：判断pop序列是否与出栈序列一致
//     while(pop < popped.length){
//         if(popped[pop] !== stack.pop()) return false
//         pop++
//     }

//     return true
// };

/**
 * 题解：Goodnotes-单调队列·栈的压入、弹出序列
 */
// @lc code=end



/*
// @lcpr case=start
// [6,7,8,9,10,11]\n[9,11,10,8,7,6]\n
// @lcpr case=end

// @lcpr case=start
// [6,7,8,9,10,11]\n[11,9,8,10,6,7]\n
// @lcpr case=end

 */

