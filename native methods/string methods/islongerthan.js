/* Create a JavaScript function called isLongerThan.
This function should take two parameters: a string and a number.
It should return true if the length of the string is greater than the given number, and false otherwise. */

function isLongerThan(txt, num) {
    if(txt.length > num){
        return true
    } else{ 
        return false
    }
}

console.log(isLongerThan('hello', 3))
console.log(isLongerThan('hello',5))
console.log(isLongerThan('',1))
console.log(isLongerThan('',0))