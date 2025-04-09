/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    const a=word1.join("").replace(",","")
   const b=word2.join("").replace(",","")
   if(a==b){
       return true
   }else{
       return false
   }
};