/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    
    let rowPower = [];
    
    for(let y = 0; y < mat.length; y++){
        let power = 0;
        for(let x of mat[y]){
            if(x == 0){
                break;
            }
            power++;
        }
        
        rowPower.push({
            power,
            index:y
        })
    }
    
    rowPower.sort(compareFn);
    
    return rowPower.splice(0,k).map(({power,index}) => (index));


    function compareFn(a, b) {
        if (a.power < b.power) {
            return -1;
        }
        if (a.power > b.power) {
            return 1;
        }
        if(a.index > b.index){
            return 1;
        }
        return -1;
    }
};