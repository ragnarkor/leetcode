/*
 * @lc app=leetcode.cn id=LCR 159 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 159] 库存管理 III
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var inventoryManagement = function(arr, k) {
    quickSort(arr, 0, arr.length-1, k)
    return arr.slice(0, k)
};

function quickSort(arr, low, high, k){
    if(low >= high) return
    const pivot = partition(arr, low, high, k)  // k的位置已经排序好
    if(pivot === k) return
    else if(pivot > k)quickSort(arr, low, pivot-1, k)   // k在基准左侧，还需继续排0～pivot
    else quickSort(arr, pivot+1, high, k)// k在基准右侧，还需继续排pivot～k
}

function partition(arr, low, high, k){
    let pivot = arr[low]
    while(low < high){
        // 确定左哨兵，从右指针开始比较
        while(low < high && arr[high] >= pivot) high--
        arr[low] = arr[high]
        while(low < high && arr[low] <= pivot) low++
        arr[high] = arr[low]
    }
    arr[low] = pivot    // 填回基准
    return low
}
/**
 * 题解：Goodnotes-排序·最小的k个数
 */
// @lc code=end



/*
// @lcpr case=start
// [2,5,7,4]\n1\n
// @lcpr case=end

// @lcpr case=start
// [0,2,3,6]\n2\n
// @lcpr case=end

 */

