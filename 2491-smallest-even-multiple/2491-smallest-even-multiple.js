/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let a=0
    let b=0
    for(i=1;i<=10;i++){
        a=n*i
        for(j=1;j<=150;j++){
            b=2*j
            if(a===b){
                return a
            }
        }
    }
};