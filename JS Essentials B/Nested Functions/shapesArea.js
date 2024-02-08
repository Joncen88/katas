/* Your task is to create three functions in JavaScript to calculate the area of rectangles and triangles.
The first two functions calcAreaRectangle and calcAreaTriangle will calculate the areas of a rectangle and a triangle, respectively.
The formula for a rectangle is a * b, while for a triangle it's a * b / 2.
The third function calcArea, takes 2 numbers and a string 'rectangle' or 'triangle' and decides which calculation to perform based on the given string.
If a different string, or no string, is passed, return null.

Automatic tests are not available for this kata. Please use the tests below in NodeJS.
*/

function calcAreaRectangle(a, b){
    return a * b
}

function calcAreaTriangle(a, b){
    return (a * b) / 2
}

function calcArea (a, b, 'shape') {
    if(shape === 'rectangle') {
        return calcAreaRectangle(a, b)
    } else if (shape === 'triangle') {
        return calcAreaTriangle(a, b)
    } else return 'null'
}