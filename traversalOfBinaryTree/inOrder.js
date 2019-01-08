/**
 * @author: create by eleven
 * @version: v1.0
 * @description:
 * @date:2019/1/8
 **/
/**
 * 中序遍历，非递归实现
 * @param tree 待遍历树
 * @returns {Array} 返回访问结果
 * @description 先找到最左子节点，依次将左节点入栈，
 * 然后使用栈弹出，检测当前弹出节点是否有右子树，
 * 重复之前的方法检索右子树根节点，直到整棵树遍历完成
 */
function inOrder(tree){
    let stack = [],
        currentTree,
        orderArr = [],
        goFarLeft = (checkTree = {}) => {//寻找最左子节点，并在过程中依次将检索到的节点入栈
            let currentTree = checkTree;
            stack.push(currentTree);
            while (currentTree.left) {
                stack.push(currentTree.left);
                currentTree = currentTree.left;
            }
        };
    goFarLeft(tree);
    while(stack.length){//依次弹出节点并检索其是否包含右子树，如果有则遍历右子树
        currentTree=stack.pop();
        orderArr.push(currentTree.value);
        currentTree.right&&goFarLeft(currentTree.right)
    }
    return orderArr;
}

/**
 * 中序遍历，递归实现
 * @param tree 待访问树
 * @returns {Array} 返回访问结果
 */
function recursionInOrder(tree){
    let orderArr=[],inOrder=(tree)=>{
        tree.left&&inOrder(tree.left);
        orderArr.push(tree.value);
        tree.right&&inOrder(tree.right);
    };
    inOrder(tree);
    return orderArr;
}
requestJs(["./traversalOfBinaryTree/basicData.js"]).then(()=>{
    console.log("非递归访问结果 " + inOrder(tree));
    console.log("递归访问结果   " + recursionInOrder(tree));
});