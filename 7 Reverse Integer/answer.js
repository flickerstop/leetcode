/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    
    
    let num = parseInt((""+x).split("").reverse().join("")) * (x<0 ? -1 : 1);
    
    
    return num > 2**31-1 ? 0 : num < 2**31*-1 ? 0 : num;
};