/**
 * 以递归的方式 实现合并排序;
 * @param inputArr
 */
function mergeSort(inputArr=[]){
    let leftItem,
        rightItem,
        leftArr,
        rightArr;
    if (inputArr.length >= 2) {//当数组元素个数大于2时，将输入数组分为大小接近的两个子数组并排序，否则直接返回原数组
        leftArr = inputArr.splice(0, parseInt(inputArr.length / 2));
        rightArr = inputArr.splice(0);
        mergeSort(leftArr);
        mergeSort(rightArr);//分别处理两子数组排序
        while (leftArr.length || rightArr.length) {//将子数组合并还原排序后原数组
            leftItem = leftArr.shift();
            rightItem = rightArr.shift();
            if (!leftItem) {
                inputArr.push(rightItem);
            } else if (!rightItem) {
                inputArr.push(leftItem);
            } else if (rightItem < leftItem) {
                inputArr.push(rightItem);
                leftArr.unshift(leftItem);
            } else {
                inputArr.push(leftItem);
                rightArr.unshift(rightItem);
            }
        }
    }
    return inputArr;
}
let a=mergeSort([103,24,25,12,305,47,58,90,77]);
console.log(a);