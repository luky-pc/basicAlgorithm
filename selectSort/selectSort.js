/**
 * @author: create by eleven
 * @version: v1.0
 * @description:
 * @date:2019/1/5
 **/
/**
 * 选择排序实现
 * 依次选择出最小数到最大数，通过记录数组下标，在每一次循环结束时，选出本轮查找数
 * @param inputArr 待排序 数组
 * @returns {Array}
 */
function selectSort(inputArr=[]){
    let currentMinIndex,//记录当前轮，查找最小值对应数组下标
        temp;
    for(let index=0;index<inputArr.length-1;index++){
        currentMinIndex=index;
        for(let unsortIndex=index+1;unsortIndex<inputArr.length;unsortIndex++){
            if(inputArr[unsortIndex]<inputArr[currentMinIndex]){
                currentMinIndex=unsortIndex;
            }
        }
        temp=inputArr[index];
        inputArr[index]=inputArr[currentMinIndex];
        inputArr[currentMinIndex]=temp;
    }
    return inputArr;
}
let a=selectSort([103,24,25,12,305,47,58,90,77]);
console.log(a);