/**
 * @param {number[]} nums
 * @return {number}
 */
 var firstMissingPositive = function(nums) {
    nums.sort((a, b)=>{return a - b;});

    let lowest = 1;
    for(let num of nums){
        if(num < lowest){
            continue;
        }

        if(num == lowest){
            lowest++;
        }else{
            return lowest;
        }
        
    }
    return lowest;
};