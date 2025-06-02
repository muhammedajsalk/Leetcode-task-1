/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let negativeNumber=[]
    let positiveNumber=[]
    nums.map((item)=>{
        if(item<0){
            negativeNumber.push(item)
        }
        if(item>0){
            positiveNumber.push(item)
        }
    })
    if(negativeNumber.length>=positiveNumber.length){
        return negativeNumber.length
    }else{
        return positiveNumber.length
    }
};