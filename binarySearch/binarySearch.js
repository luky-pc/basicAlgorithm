/**
 * @author: create by eleven
 * @version: v1.0
 * @description:
 * @date:2019/1/5
 **/
/**
 * 二分查找法
 * @param inputArr 输入数组
 * @param toBeFound 待查找数
 * @returns {number} 返回待查找数在数组中的下标，若不存在目标数组中则返回-1
 */
function binarySearch(inputArr=[],toBeFound){
    let start=0,
        end=inputArr.length-1,
        middle;
    while(start<=end){
        middle = parseInt((start + end) / 2);
        if(toBeFound===inputArr[middle]){//与中间数比较，确定区间
            return middle;
        }else if(toBeFound<inputArr[middle]){
            end=middle-1;
        }else {
            start = middle+1;
        }
    }
    return -1;
}
let testArr=[1,4,8,9,13,45,46,58,60],
searchArr=[1,13,14,45,47,58,59,60],
position;
for(let index=0;index<searchArr.length;index++) {
    position=binarySearch(testArr, searchArr[index])+1;
    if(position) {
        console.log(searchArr[index] + " 是数组[" + testArr + "]中第" + position + "个数字 ");
    }else{
        console.log(searchArr[index] + " 数组[" + testArr + "]中不存在 ");
    }
}