/**
 * @author: create by eleven
 * @version: v1.0
 * @description: 深度遍历 样例结构数据
 * @date:2019/1/8
 **/

function dfsTraverse(data){
    let stack=[data],temp,orderArr=[];
    while(stack.length){
        temp=stack.pop();
        orderArr.push(temp);
        temp.children&&temp.children.reverse().map((item)=>{//倒序入栈，使出栈保持原子节点顺序
            stack.push(item);
        });
    }
    return orderArr;
};

/**
 * 递归实现深度遍历
 * @param data
 * @returns {Array}
 */
function recursionDfsTraverse(data={}){
 let orderArr=[],
     dfsTraverse = (data={}) => {
         orderArr.push(data);
         data.children && data.children.map((child) => {
             dfsTraverse(child);
         });
     };
 dfsTraverse(data);
 return orderArr;
}
requestJs(["./traverse/basicData.js"]).then(()=>{
    let recursionResult=recursionDfsTraverse(exampleData),
        result=dfsTraverse(exampleData);
    console.log("递归深度遍历结果：" + recursionResult.map((item) => {
        return item.name + ":" + item.value;
    }).join(","));
    console.log("非递归深度遍历结果：" + result.map((item) => {
        return item.name + ":" + item.value;
    }).join(","));
});