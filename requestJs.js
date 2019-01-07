/**
 * @author: create by eleven
 * @version: v1.0
 * @description: 模拟requireJS 实现简单的js加载
 * @date:2019/1/7
 **/

function requestJs(addressArray=[]){
    let pResolve,
        pReject,
        promise = new Promise((resolve, reject) => {
            pReject = reject;
            pResolve = resolve;
        }), loadCount = 0,
        scriptLoad = () => {
            loadCount++;
            if(loadCount===addressArray.length){
                pResolve();
            }
        };
    for(let index=0;index<addressArray.length;index++){
        let scriptDom=document.createElement("script");
        scriptDom.src=addressArray[index];
        scriptDom.onload=scriptLoad;
        document.body.appendChild(scriptDom);
    }
    return promise;
}