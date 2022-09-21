/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    
    
    let longest = "";
    
    // For the entire string
    for(let i = 0; i<s.length;i++){
        
        let norm = [];
        let back = [];
        
            
        // From this point on
        for(let j = i; j<s.length;j++){
            
            norm.push(s[j]);
            back.unshift(s[j]);
            
            if((j-i+1) < longest.length){
                continue;
            }
            
            let isPalin = true;
            for(let k = 0; k <= j-i; k++){
                if(norm[k] != back[k]){
                    isPalin = false;
                    break;
                }
            }
            
            if(isPalin && (j-i+1) > longest.length){
                longest = norm.join("");
            }
           
        }
    }
    
    
    return longest;
};