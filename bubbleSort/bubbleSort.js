/**
 * @author: create by eleven
 * @version: v1.0
 * @description:
 * @date:2019/1/7
 **/
/**
 * 冒泡排序实现，每次下沉或上浮一个元素，单次循环内有多次移动
 * @param inputArr
 * @returns {Array}
 */
function bubbleSort(inputArr=[]){
    let change=true,temp;
    for(let index=inputArr.length-1;index>=0&&change;index--){
        change=false;
        for(let jIndex=0;jIndex<index;jIndex++){
            if(inputArr[jIndex]>inputArr[jIndex+1]){
                temp=inputArr[jIndex];
                inputArr[jIndex]=inputArr[jIndex+1];
                inputArr[jIndex+1]=temp;
                change=true;
            }
        }
    }
    return inputArr;
}
let a=bubbleSort([103,24,25,12,305,47,58,90,77]);
console.log(a);