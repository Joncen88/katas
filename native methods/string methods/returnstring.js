/* Create a returnLength function that takes a parameter 
and returns its length if it's a string. In any other case it returns the type of the parameter. */

function returnLength(txt) {
    if(typeof txt === 'string'){
        return txt.length
    } else {
        return typeof txt
    }

}

console.log(returnLength('hello'))	
console.log(returnLength(''))
console.log(returnLength(10))
console.log(returnLength([1,2,3]))
console.log(returnLength(true))