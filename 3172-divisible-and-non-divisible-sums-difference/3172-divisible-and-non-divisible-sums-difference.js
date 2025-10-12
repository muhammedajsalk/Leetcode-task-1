/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let a=[]
    let b=[]
    for(i=1;i<=n;i++){
        if(i % m === 0){
            a.push(i)
        }else{
            b.push(i)
        }
    }
    let c=a.reduce((acc,item)=>{
        return acc+=item
    },0)
    let d=b.reduce((acc,item)=>{
        return acc+=item
    },0)
    return d-c
};