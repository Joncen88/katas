/* Your task is to create a JavaScript function named addAges.
This function should take two parameters: an array of objects 
and an array of numbers of equal length.
The function should add the numbers in the second array to the objects as age, 
following the corresponding index, and return the updated array of objects. */

function addAges(obj, num) {
    obj.age = num
    return obj + num
}

console.log(addAges([{'name':'Alice'},{'name':'Bob'}],[21,51]))