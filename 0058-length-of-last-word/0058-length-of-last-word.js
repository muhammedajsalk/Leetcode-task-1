/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     const a=s.trim()
    const b=a.split(" ")
    const c=b.length-1
    const d= b[c]
    return d.length
};