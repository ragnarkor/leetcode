/*
 * @lc app=leetcode.cn id=125 lang=javascript
 * @lcpr version=30204
 *
 * [125] 验证回文串
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //\W匹配，非数字、非字母和非下划线
    s = s.replace(/[\W | _]/g,'').toLowerCase();
    let left = 0, right = s.length - 1;
    while(left < right){
      if(s[left] !== s[right])
        return false;
      left ++;
      right --;
    }
    return true;
  };
// @lc code=end



/*
// @lcpr case=start
// "A man, a plan, a canal: Panama"\n
// @lcpr case=end

// @lcpr case=start
// "race a car"\n
// @lcpr case=end

// @lcpr case=start
// " "\n
// @lcpr case=end

 */

