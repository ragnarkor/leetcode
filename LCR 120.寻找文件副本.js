/*
 * @lc app=leetcode.cn id=LCR 120 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 120] 寻找文件副本
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} documents
 * @return {number}
 */
var findRepeatDocument = function(documents) {
    for(let i = 0; i < documents.length;){
        if(documents[i] === i) {
            i++     // 只有换到正确位置才移位下一个
            continue  // 已经在正确的位置上
        }
        // 正确位置上已经有了重复的元素，如[0, 0]
        if(documents[documents[i]] === documents[i]) return documents[i]
        // 交换位置
        let temp = documents[i]
        documents[i] = documents[temp]
        documents[temp] = temp
    }
    return -1
};
// @lc code=end

/**
 * 交换排序，将文件位置移动到对应的下标上
 * 如果下标位置上有文件，且下标位置对应，则表明遇到重复文件
 * 
 */

/*
// @lcpr case=start
// [2, 5, 3, 0, 5, 0]\n
// @lcpr case=end

 */

