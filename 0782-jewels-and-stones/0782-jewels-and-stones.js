/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let a=jewels.split("")
    let b=stones.split("")
    let c=0
    for(i=0;i<b.length;i++){
        if(a.includes(b[i])){
            c++
        }
    }
    return c
};