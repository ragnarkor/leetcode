/*
 * @lc app=leetcode.cn id=841 lang=javascript
 * @lcpr version=30204
 *
 * [841] 钥匙和房间
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // 初始化，所有房间都是未访问状态
    const visited = new Array(rooms.length).fill(false)

    function dfs(room){
        // 当前房间访问过了，直接跳过
        if(visited[room])
            return
        // 访问当前房间
        visited[room] = true
        // 递归访问其他房间
        for(let key of rooms[room])
            dfs(key)    
    }

    dfs(0)
    for(let visit of visited){
        if(!visit)
            return false  // 存在未被访问的房间，返回false
    }
    return true
};

/**
 * 思路：画出有向图，遍历图中所有节点和路径
 * 题解：https://leetcode.cn/problems/keys-and-rooms/solutions/1678758/dai-ma-sui-xiang-lu-841-yao-chi-he-fang-8mlei/
 */
// @lc code=end



/*
// @lcpr case=start
// [[1],[2],[3],[]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,3],[3,0,1],[2],[0]]\n
// @lcpr case=end

 */

