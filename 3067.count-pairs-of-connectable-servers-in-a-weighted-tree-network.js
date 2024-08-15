/*
 * @lc app=leetcode.cn id=3067 lang=javascript
 * @lcpr version=30203
 *
 * [3067] 在带权树网络中统计可连接服务器对数目
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * @param {number[][]} edges
 * @param {number} signalSpeed
 * @return {number[]}
 */
var countPairsOfConnectableServers = function(edges, signalSpeed) {
    // 先根据edges数组生成树/网
    const n = edges.length + 1  // 节点个数为 边+1
    const nodes = Array.from({length: n}, () => [])  // 根服务器数组
    for(const [a, b, weight] of edges){
        // 每个节点数组存放它的相邻节点
        nodes[a].push([b, weight])
        nodes[b].push([a, weight])
    }

    // dfs统计符合条件的节点数
    function dfs(node, root, sum){
        let cnt = (sum % signalSpeed === 0) ? 1 : 0 // 判断node到root的距离能否被整除，能整除则当前节点符合条件
        // 遍历子树
        for(const [child, weight] of nodes[node]){
            // 排除根服务器
            if(child !== root) cnt += dfs(child, node, (sum + weight))
        }
        return cnt
    }

    // 计算节点对
    const count = new Array(n).fill(0)
    for(let root = 0; root < n; root++){
        let pre = 0
        // 各根服务器计算自己子树中符合要求的节点数
        for(const [node, weight] of nodes[root]){
            let cnt = dfs(node, root, weight)
            count[root] += cnt * pre   // 返回结果加入当前节点的对数和
            pre += cnt  // 更新节点数之和
        }
    }
    return count

    /**
     * 根服务器为nodes[0]，其余均为根服务器子树：
     * 1. 从子树中dfs统计符合条件的节点数
     * 2. 排列组合节点对数
     *  - 第i个节点的对数 = 符合条件的i节点数 * ∑符合条件的前i-1个节点数
     */
};
// @lc code=end

/**
 * 视频题解：https://www.bilibili.com/video/BV1AU411F7Fp/?vd_source=0803747abec14f63312f7ed860d78d60
 */

/*
// @lcpr case=start
// [[0,1,1],[1,2,5],[2,3,13],[3,4,9],[4,5,2]]\n1\n
// @lcpr case=end

// @lcpr case=start
// [[0,6,3],[6,5,3],[0,3,1],[3,2,7],[3,1,6],[3,4,2]]\n3\n
// @lcpr case=end

 */

