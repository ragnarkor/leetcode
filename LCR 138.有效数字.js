/*
 * @lc app=leetcode.cn id=LCR 138 lang=javascript
 * @lcpr version=30204
 *
 * [LCR 138] 有效数字
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    let num = s.trim()
    let hasDot = hasE = hasNum = false
    // 基本情况：数字、小数点、e/E、+/e、其他字符
    for(let i = 0; i < num.length; i++){
        const c = num[i]
        if(c >= '0' && c <= '9'){   // 数字（一定要用字符判断）
            hasNum = true
        }else if(c === '.'){    // 小数：8.、.8、8.8
            // 不合理情况：前面已有小数点/e/E
            if(hasDot || hasE) return false
            hasDot = true
        }else if(c === 'e' || c === 'E'){   // e/E：1.6e+100
            // 不合理情况：前面已经有e、前面没有数字/小数、后面没有数字
            if(hasE || !hasNum) return false
            hasE = true
            hasNum = false  // 通过重置标志位判断后面还会不会有数字
        }else if(c === '+' || c === '-'){   // +/-：+100、-1E-16
            // 不合理情况：+/-号不在首位，+/-号不在e/E后面
            if(i !== 0 && num[i-1] !== 'e' && num[i-1] !== 'E') return false
        }else{  // 其他字符
            return false
        }
    }
    return hasNum
};
// @lc code=end



/*
// @lcpr case=start
// "0"\n
// @lcpr case=end

// @lcpr case=start
// "e"\n
// @lcpr case=end

// @lcpr case=start
// "."\n
// @lcpr case=end

 */

