/* Your task is to create two functions.
The first function, calculateSquare, should take a number as a parameter and return its square.
The second function, sumOfSquares, should take two numbers, invoke calculateSquare for each number, and then return the sum of their squares.

Automatic tests are not available for this kata, please use the tests below in NodeJs.

sumOfSquares(5, 5) // 50
sumOfSquares(4, 10) // 116 */

function calculateSquare(number) {
    return number * number
}

function sumOfSquares(number1, number2) {
    let square1 = calculateSquare(number1)
    let square2 = calculateSquare(number2)
    return square1 + square2
}