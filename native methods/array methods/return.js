/* Create a function returnLength that takes an array as its only parameter, 
then returns the length of the array as a number,
or 'the array is empty' if there are no elements in the array. */

function returnLength(arr) {
    if (arr.length === 0) {
    return 'the array is empty'
    } else {
    return arr.length
    }
}

console.log(returnLength([2, 3, 4]))