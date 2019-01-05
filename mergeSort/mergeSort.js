/**
 * @author: create by eleven
 * @version: v1.0
 * @description:
 * @date:2019/1/5
 **/
/**
 * 使用非递归方式实现合并排序
 * @param inputArr
 * @returns {*}
 */
function mergeSort(inputArr=[]){
    let temArr=inputArr.map((item)=>{return [item]}),transitionArr,childArr=[],index,
    join=(firstArr=[],secondArr=[])=>{
        let result=[];
        while(firstArr.length||secondArr.length){
            if(firstArr[0]<secondArr[0]||!secondArr[0]){
                result.push(firstArr[0]);
                firstArr.shift();
            }else{
                result.push(secondArr[0]);
                secondArr.shift();
            }
        }
        return result;
    };
    while(temArr.length>1){
        transitionArr=[...temArr];
        temArr=[];
        index=0;
        while(index<transitionArr.length){
            childArr=join(transitionArr[index],transitionArr[index+1]);
            temArr.push(childArr);
            index+=2;
        }
    }
    return temArr[0];
}
let a=mergeSort([103,24,25,12,305,47,58,90,77]);
console.log(a);