/*
 * @lc app=leetcode.cn id=4 lang=javascript
 * @lcpr version=30203
 *
 * [4] 寻找两个正序数组的中位数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len = nums1.length + nums2.length
    let res = 0
    if(len % 2){    // 奇数
        const mid = Math.floor((len-1)/ 2)
        res = getKthNumber(nums1, 0, nums2, 0, mid+1)
    }else{  // 偶数
        const mid1 = Math.floor((len-1) / 2), mid2 = mid1 + 1
        res = (getKthNumber(nums1, 0, nums2, 0, mid1+1) + getKthNumber(nums1, 0, nums2, 0, mid2+1)) / 2
    }
    return res
};

    /**
     * 
     * @param {*} nums1 较短数组
     * @param {*} l1 nums1起始位置
     * @param {*} nums2 较长数组
     * @param {*} l2 nums2起始位置
     * @param {*} k 第k小数
     */
    function getKthNumber(nums1, l1, nums2, l2, k){
        // 递归终止条件
        if(l1 > nums1.length-1)   
            return nums2[l2+k-1]
        if(l2 > nums2.length-1)   
            return nums1[l1+k-1]
        if(k === 1) // 找最小数(得先确保nums1/2有值)
            return Math.min(nums1[l1], nums2[l2])

        let k1 = Math.floor(k/2), k2 = k - k1   // 两个数组分别要比较的k值
        // 数组实际长度，需注意nums的长度是否小于k，如nums1=[1,2]，k=3
        let len1 = Math.min(nums1.length - l1, k1) 
        let len2 = Math.min(nums2.length - l2, k2)
        // 比较最后一位大小
        let r1 = l1 + len1 - 1, r2 = l2 + len2 - 1    // 终止位置
        if(nums1[r1] > nums2[r2]){    
            // 此时排除nums2前r2位
            return getKthNumber(nums1, l1, nums2, r2+1, k-len2)
        }else{  
            // 此时排除nums1前r1位
            return getKthNumber(nums1, r1+1, nums2, l2, k-len1)
        }
    }

// @lc code=end

/**
 * 法一：对有序数组进行归并排序，再获取中位值
 *  - 时间复杂度O(m+n)，空间复杂度O(m+n)
 * 法二：二分查找（要求log时间复杂度时考虑）第k小的数
 *  - 中位数
 *      - 奇数：(m+n-1) // 2
 *      - 偶数：(m+n-1) // 2 和 (m+n-1) // 2 + 1
 *  - 第k小的数 = 中位数 + 1
 *  - 分别从两个数组进行二分查找
 *      - 数组一找 第k//小的数
 *      - 数组二找 第k-k//2小的数
 *  - 设A=[1,3,5,7]，B=[2,4,6,8,9]，k=5。
 *      - 第一次找：A=[1,3]，B=[2,4,6]。比较数组最后一位大小，排除数组A。问题规模缩小成在A=[5,7]，B=[2,4,6,8,9]中找第k-2小的数。
 *      - 第二次找：A=[5]，B=[2,4]。比较数组最后一位，排除数组B。问题规模缩小成在A=[5,7]，B=[6,8,9]中找第k-4小的数。
 *      - 当k=1的时候，比较数组第一位，最小值则为返回结果
 *  - 特殊情况：考虑k//2是否大于数组长度
 * 
 * 视频：https://www.bilibili.com/video/BV1PL4y1g75o/?spm_id_from=333.337.search-card.all.click&vd_source=0803747abec14f63312f7ed860d78d60
 */

/*
// @lcpr case=start
// [1,3]\n[2]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n[3,4]\n
// @lcpr case=end

 */

