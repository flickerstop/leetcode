
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    
    let poolOfChar = magazine.split("");
    
    for(let charNeeded of ransomNote.split("")){
        if(poolOfChar.includes(charNeeded)){
            poolOfChar.splice(poolOfChar.indexOf(charNeeded),1);
        }else{
            return false;
        }
    }
    return true;
};