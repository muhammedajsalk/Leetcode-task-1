/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const abu=[]
    accounts.map((item)=>{
        const newData=item.reduce((acc,items)=>acc+items,0)
        abu.push(newData)
    })
    const topValue=Math.max(...abu)
    return topValue
};