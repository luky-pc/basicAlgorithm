/**
 * @author: create by eleven
 * @version: v1.0
 * @description:
 * @date:2019/1/7
 **/
/**
 * 先序遍历，非递归实现
 * @param tree 待遍历树
 * @returns {Array} 返回访问结果
 */
function preOrder(tree){
    let stack=[tree],currentTree,orderArr=[];
    while(stack.length){
        currentTree=stack.pop();
        orderArr.push(currentTree.value);
        currentTree.right&&stack.push(currentTree.right);
        currentTree.left&&stack.push(currentTree.left);
    }
    return orderArr;
}

/**
 * 先序遍历，递归实现
 * @param tree 待访问树
 * @returns {Array} 返回访问结果
 */
function recursionPreOrder(tree){
    let orderArr=[],preOrder=(tree)=>{
        orderArr.push(tree.value);
        tree.left&&preOrder(tree.left);
        tree.right&&preOrder(tree.right);
    };
    preOrder(tree);
    return orderArr;
}

let scr=document.createElement("script");
scr.src="./traversalOfBinaryTree/basicData.js";
scr.onload=function(){
    console.log("非递归访问结果 " + preOrder(tree));
    console.log("递归访问结果   " + recursionPreOrder(tree));
};
document.body.appendChild(scr);