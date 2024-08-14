/*
 * @lc app=leetcode.cn id=LCR 128 lang=javascript
 * @lcpr version=30203
 *
 * [LCR 128] 库存管理 I
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
 /**
 * @param {number[]} stock
 * @return {number}
 */
var stockManagement = function(stock) {
    // 左闭右闭
    let left = 0
    let right = stock.length - 1
    // 寻找右边子数字的左边界
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(stock[mid] > stock [right]){    // 左边数组左指针右移
            left =  mid + 1
        }else if(stock[mid] < stock[right]){   // 右边数组右指针左移
            right = mid
        }else{
            // 确保旋转点在[left, right]中即可，right往前摸索
            right--
        }
    }
    return stock[left] // 左右指针相遇
};
/**
 * 排序数组的查找优先考虑二分法
 * 本问题可以分为左排序数组和右排序数组，且左排序数组的每一个元素都大于右排序数组，我们需要寻找右排序数组的最小元素
 * 1. mid > left，mid/left可能在左排序数组/右排序数组，无法判断
 * 2. mid < left， mid在右排序数组，left右移无法判断位置
 * 3. mid = left，不会有这种情况
 * 4. mid > right，mid在左排序数组，left=mid+1
 * 5. mid < right，mid/right都在右排序数组，right=mid
 * 6. mid = right，缩小问题规模，right--
 * 故mid只用跟right比较大小，左右指针相遇时即为旋转点
 */
// @lc code=end



/*
// @lcpr case=start
// [4,5,8,3,4]\n
// @lcpr case=end

// @lcpr case=start
// [5,7,9,1,2]\n
// @lcpr case=end

 */

