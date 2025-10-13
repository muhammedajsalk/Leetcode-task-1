/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let xs=Math.abs(z-x)
    let ys=Math.abs(y-z)
        if(xs<ys){
            return 1
        }else if(xs>ys){
            return 2
        }else{
            return 0
        }
};