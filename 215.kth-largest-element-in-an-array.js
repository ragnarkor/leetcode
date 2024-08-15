/*
 * @lc app=leetcode.cn id=215 lang=javascript
 * @lcpr version=30203
 *
 * [215] 数组中的第K个最大元素
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, k)
};

function quickSelect(nums, k){
    const n = nums.length
    const pivot = nums[Math.floor(Math.random() * n)]
    // 将小于/等于/大于pivot的数字划分到对应数组中
    const small = [], equal = [], large = []
    for(const num of nums){
        if(num < pivot)
            small.push(num)
        else if(num > pivot)
            large.push(num)
        else
            equal.push(num)
    }

    // 从pivot的位置推断是否需要递归，第k大即为坐标n-k
    // k在big
    if(k <= large.length)
        return quickSelect(large, k)   // k不影响
    // k在small    
    else if(n-k < small.length) 
        return quickSelect(small, small.length-(n-k))    // k变为k-(euqal.length+large.length)或small.length-(n-k)
    // k在euqal，可以直接返回
    else
        return pivot

}
/**
 * 思路：设 N 为数组长度。根据快速排序原理，如果某次哨兵划分后，基准数的索引正好是 N−k ，则意味着它就是第 k 大的数字 。此时就可以直接返回它，无需继续递归下去了。
 * 1.二分查找算法是在已排序的数组中查找特定元素。
 *  - 每次比较后，它都会排除掉一半的元素，因此它的时间复杂度是 O(logn)。
 * 2.快速选择算法是在未排序的数组中查找第 k 大（或小）的元素。
 *  - 它使用了类似于快速排序的分区操作，每次操作后，它都会将数组划分为两部分，一部分的元素都比另一部分的元素大（或小）。然后，它只需要在较小的一部分中继续查找。
 *  - 平均情况下它的时间复杂度是 O(n)。但是在最坏情况下（例如当输入数组已经有序时），快速选择可能需要检查数组中的所有元素，因此最坏情况下的时间复杂度是 O(n^2)。
 *  - 通过随机选择基准元素的策略，我们可以认为快速选择算法的时间复杂度是 O(n)。
 */
// @lc code=end



/*
// @lcpr case=start
// 2\n
// @lcpr case=end

// @lcpr case=start
// 4\n
// @lcpr case=end

 */

