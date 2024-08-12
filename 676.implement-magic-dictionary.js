/*
 * @lc app=leetcode.cn id=676 lang=javascript
 * @lcpr version=30204
 *
 * [676] 实现一个魔法字典
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start

var MagicDictionary = function() {
    this.root = new Trie()
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    for(const word of dictionary){
        let cur = this.root
        for(const ch of word){
            const idx = ch.charCodeAt() - 'a'.charCodeAt()
            if(!cur[idx]) 
                cur[idx] = new Trie()   // 录入该字母
            cur = cur[idx]  // 指针后移
        }
        cur.isEnd = true    // 单词录入完毕
    }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    function dfs(root, pos, modified){
        // 遍历到单词末尾
        if(pos === searchWord.length)
            return root.isEnd && modified

        const idx = searchWord[pos].charCodeAt() - 'a'.charCodeAt()
        // 判断修改字母后是否有符合条件的单词
        if(!modified){
            for(let i = 0; i < 26; i++){
                // 同一字母或字母没有单词
                if(i === idx || !root[i]) continue
                // 修改字母后
                if(dfs(root[i], pos+1, true)) return true
            }
        }
        // 判断不修改该字母是否有符合条件的单词
        if(root[idx]){
            if(dfs(root[idx], pos+1, modified)) return true
        }
        return false
    }
    return dfs(this.root, 0, false)
};

class Trie{
    constructor(){
        this.child = new Array(26).fill(0)  // 26叉树
        this.isEnd = false  // 判断是否为单词结尾
    }
}

/**
 * 法一：暴力枚举
 * 法二：字典树遍历
 * 题解：https://leetcode.cn/problems/implement-magic-dictionary/solutions/2877560/trie-mei-ju-ha-xi-zi-dian-shu-yuan-li-tu-i7qm/
 */
/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
// @lc code=end



