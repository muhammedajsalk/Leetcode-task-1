/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let g=[]
    let splited=words.map((item)=>item.split(""))
    for (const [index,value] of splited.entries()) {
        for(const valueTwo of value){
            if(valueTwo===x){
               g.push(index)
            }
        }
    }
    return [...new Set(g)]
};