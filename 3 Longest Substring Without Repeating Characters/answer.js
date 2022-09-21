/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    
    let longest = 0;
    
    let current = [];
    
    
    for(let i = 0; i < s.length; i++){
        if(current.includes(s[i])){
            if(current.length > longest){
                longest = current.length;
            }
            
            // get the index of the last time this char was used
            let index = current.indexOf(s[i]);
            
            // remove up to the last time this character was displayed
            current.splice(0,index+1)
            
        }


        current.push(s[i]);
    }

    if(current.length > longest){
        longest = current.length;
    }
    
    return longest;
};