/**
 * @author: create by eleven
 * @version: v1.0
 * @description:
 * @date:2019/7/17
 **/
/**
 * 通过JSON实现简单的深度拷贝
 * @param obj
 * @returns {{}}
 */
function deepCloneByJSON(obj) {
    "use strict";
    return JSON.parse(JSON.toString(obj));
}

/**
 *
 * @param obj
 * @returns {{}}
 */
function deepCloneByRecur(obj) {
    "use strict";
    let newObj = {};
    if(Object.prototype.toString.call(obj) === '[object Object]') {
        for(let key in obj) {
            newObj[key] = deepCloneByRecur(obj[key]);
        }
    } else if(Object.prototype.toString.call(obj) === '[object Array]') {
        newObj = [];
        obj.forEach(prop => newObj.push(deepCloneByRecur(prop)));
    } else {
        newObj = obj;
    }
    return newObj;
}