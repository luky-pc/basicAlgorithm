/**
 * @author: create by eleven
 * @version: v1.0
 * @description: 快速排序，选择一个元素节点，在原数组中将比它小的元素放置在该节点左边，比它打的节点放置在右边；记录一次排序后
 * @date:2019/1/9
 **/
/**
 * 非递归实现快速排序
 * @param inputArr 待排序数组
 * @returns {*}
 */
function quickSort(inputArr){
    let stack=[{start:0,end:inputArr.length-1}],pIndex;
    while(stack.length){
        let {start,end}=stack.pop();
        pIndex=start;
        for(let index=start+1;index<=end;index++){
            if(inputArr[pIndex]>inputArr[index]){
                inputArr.splice(pIndex,1,inputArr[index],inputArr[pIndex]);
                inputArr.splice(index+1,1);//删除已移动节点
                pIndex++;
            }
        }
        pIndex > start && stack.push( {start, end:pIndex});
        pIndex + 1 < end && stack.push({start:pIndex + 1, end});
    }
    return inputArr;
}
/**
 * 快速排序递归实现
 * @param inputArr 输入数组
 * @param start 排序段 起点下标
 * @param end 排序段 截止点下标
 * @returns {*}
 */
function recursionQuickSort(inputArr,start,end){
    let pIndex=start;
    for(let index=start+1;index<=end;index++){
        if(inputArr[pIndex]>inputArr[index]){
            inputArr.splice(pIndex,1,inputArr[index],inputArr[pIndex]);
            inputArr.splice(index+1,1);//删除已移动节点
            pIndex++;
        }
    }
    pIndex > start && recursionQuickSort(inputArr, start, pIndex);
    pIndex + 1 < end && recursionQuickSort(inputArr, pIndex + 1, end);
    return inputArr;
}

let arr=[19,2,1,4,7,20,30,21,18,17,24,25];
console.log("递归排序结果："+recursionQuickSort(arr,0,arr.length-1));
console.log("非递归排序结果："+quickSort(arr,0,arr.length-1));