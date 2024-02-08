/* Decrementing a Value
Create a JavaScript function called decrementValue.
This function should take a single parameter, a number, 
and use the decrement operator to decrease the value of the number by one.
The function should then return the decremented value. */

function decrementValue(n) {
    let val = n
    val--
    return val
}
console.log(decrementValue(100))
/* test
decrementValue(5)	4
decrementValue(100)	99
*/

