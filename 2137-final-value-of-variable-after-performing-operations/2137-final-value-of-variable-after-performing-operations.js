/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let a=0
    for(i=0;i<operations.length;i++){
        if(operations[i]==="--X"||operations[i]==="X--"){
            a--
        }else{
            a++
        }
    }
    return a
};