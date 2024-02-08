/* Replace the sum calculation in the following code with 
the Addition Assignment operator.
Don't delete the variable c.

function addTen(a) {
    let c = 10
    c = c + a
    return c
} */

function addTen(a) {
    let c = 10
    c += a
    return c
}
console.log(addTen(5))