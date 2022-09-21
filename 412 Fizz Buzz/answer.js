/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    let outputArray = [];
    
    for(let i = 1; i<=n;i++){
        let outputLine = "";
        
        if(i%3==0){
            outputLine += "Fizz";
        }
        
        if(i%5==0){
            outputLine += "Buzz";
        }
           
           
        outputArray.push(outputLine == "" ? `${i}` : outputLine);
    }
    
    return outputArray;
};