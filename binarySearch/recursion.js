/**
 * @author: create by eleven
 * @version: v1.0
 * @description:
 * @date:2019/1/5
 **/
/**
 * 递归方式解二分查找
 * @param inputArr
 * @param toBeFound
 * @returns {number}
 */
function binarySearch(inputArr,toBeFound,start=0){
    let middle=parseInt(inputArr.length/2),
        nextArr;
    if (inputArr[middle] === toBeFound) {
        return middle + start;
    } else if (middle === 0) {//当划分数组中仅有一个数据 且还不能匹配时，判定无法匹配
        return -1;
    }else if(inputArr[middle]>toBeFound){//递归调用binarySearch
        nextArr=[...inputArr].splice(0,middle);
        return binarySearch(nextArr,toBeFound,start);
    }else{
        nextArr=[...inputArr].splice(middle+1);
        return binarySearch(nextArr,toBeFound,start+middle+1);
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