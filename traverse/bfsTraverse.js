/**
 * @author: create by eleven
 * @version: v1.0
 * @description: 广度遍历实现
 * @date:2019/1/9
 **/

/**
 * 广度优先遍历，非递归实现
 * @param data
 * @returns {Array}
 */
function bfsTraverse(data){
    let stack=[data],temp,orderArr=[],childLevelNodes=[];
    while(stack.length){
        temp=stack.shift();
        orderArr.push(temp);
        temp.children&&temp.children.map((item)=>{//将下一层节点，缓存在childLevelNodes数组下，当当前层节点全部访问后，再将下一层节点入栈访问
            childLevelNodes.push(item);
        });
        if(!stack.length&&childLevelNodes.length){
            stack.push(...childLevelNodes);
            childLevelNodes=[];
        }
    }
    return orderArr;
};

/**
 * 递归实现广度遍历
 * @param data
 * @returns {Array}
 */
function recursionBfsTraverse(data={}){
    let orderArr=[],
        bfsTraverse = (nodes) => {
            let childNodes=[];
            orderArr.push(...nodes);
            nodes.map((node)=>{
                node.children&&childNodes.push(...node.children);
            });
            childNodes.length&&bfsTraverse(childNodes);
        };
    bfsTraverse([data]);
    return orderArr;
}
requestJs(["./traverse/basicData.js"]).then(()=>{
    let recursionResult=recursionBfsTraverse(exampleData),
        result=bfsTraverse(exampleData);
    console.log("递归深度遍历结果：" + recursionResult.map((item) => {
        return item.name + ":" + item.value;
    }).join(","));
    console.log("非递归深度遍历结果：" + result.map((item) => {
        return item.name + ":" + item.value;
    }).join(","));
});