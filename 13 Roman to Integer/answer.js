

/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let total = 0;
    
    let charTypes = ["I","V","X","L","C","D","M"];
    let charValues = [1,5,10,50,100,500,1000]
    
    let chars = s.split("");
    for(let i = 0; i < chars.length; i++){
        
        let nextChar = chars[i+1] != undefined ? chars[i+1] : "";
        
        // Check next
        // I -> V,X
        if((nextChar == "V" || nextChar == "X") && chars[i] == "I"){
            total -= 1;
            continue;
        }
        
        // X -> L,C
        if((nextChar == "L" || nextChar == "C") && chars[i] == "X"){
            total -= 10;  
            continue;
        }
        
        // C -> D,M
        if((nextChar == "D" || nextChar == "M") && chars[i] == "C"){
            total -= 100;
            continue;
        }
        
        total += charValues[charTypes.indexOf(chars[i])];
        
    }
    
    return total;
};