/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
        
    let regex = new RegExp(p);
    
    return s.match(regex) != null ? s.match(regex)[0] == s : false;
};