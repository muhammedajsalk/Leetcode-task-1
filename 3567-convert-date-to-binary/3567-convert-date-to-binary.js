/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    let a=date.split("-")
    let b=a.map((item,index)=>{
        return Number(item)
    })
    let c=b.map((item,index)=>{
        return (item).toString(2)
    })
    return c.join("-")
};