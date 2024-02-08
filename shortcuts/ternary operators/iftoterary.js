/* If to Ternary
In the following function, convert the if condition into a ternary operator.

function numerToBoolean(n) {
    if (n > 0) {
        return true
    } else {
        return false
    }
}  */

function numerToBoolean(n) {
    return n >  0 ? true : false
}
console.log(numerToBoolean(-30))

/* let age = 20
let isAdult

if (age >= 18) {
    isAdult = true
} else {
    isAdult = false
}


let age = 20
let isAdult = age >= 18 ? true : false
*/





/*
numerToBoolean(5)	true
numerToBoolean(-30)	false */