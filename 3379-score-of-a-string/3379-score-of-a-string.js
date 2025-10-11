/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let a=s.split("")
    let b=a.map((item,index)=>{
        return item.charCodeAt(0)
    })
    let c=b.map((item,index)=>{
        return b[index]-b[index+1]
    })
    
    let d=c.map((item,index)=>{
        if(item<=0){
            return Math.abs(item)
        }
        return item
    })
    
    let e=d.filter((item,index)=>{
        return item === Number(item)
    })
    
    let f=e.reduce((acc,item)=>{
        return acc+item
    },0)
    
    return f
};