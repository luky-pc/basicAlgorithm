/**
 * @author: create by eleven
 * @version: v1.0
 * @description:
 * @date:2019/1/8
 **/
/**
 * 后序遍历，非递归实现
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
    while(stack.length){//依次弹出节点并检索其是否包含右子树，如果有则将当前节点重新入栈，并添加右子树入栈标识，然后遍历右子树
        currentTree=stack.pop();
        if(currentTree.right&&!currentTree.rightVisit){
            stack.push(currentTree);
            goFarLeft(currentTree.right);
            currentTree.rightVisit=true;
        }else{
            orderArr.push(currentTree.value);
        }
    }
    return orderArr;
}

/**
 * 后序遍历，递归实现
 * @param tree 待访问树
 * @returns {Array} 返回访问结果
 */
function recursionInOrder(tree){
    let orderArr=[],preOrder=(tree)=>{
        tree.left&&preOrder(tree.left);
        tree.right&&preOrder(tree.right);
        orderArr.push(tree.value);
    };
    preOrder(tree);
    return orderArr;
}
requestJs(["./traversalOfBinaryTree/basicData.js"]).then(()=>{
    console.log("非递归访问结果 " + inOrder(tree));
    console.log("递归访问结果   " + recursionInOrder(tree));
});