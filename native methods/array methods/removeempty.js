/* Create a function removeEmptySpots that takes an array as a parameter.
The array may have a falsy value at the beginning or at the end (or both).
The function should remove these falsy values and return the clean array. */

function removeEmptySpots(arr) {
    if (arr.length > 0 && !arr[0]) {
        arr.shift()
    } if (arr.length > 0 && !arr[arr.length - 1]) {
        arr.pop()
    }

    return arr
}

console.log(removeEmptySpots([0,2,3,4,0]))
console.log(removeEmptySpots([null,'a','b','c']))
console.log(removeEmptySpots([10,11,0,50,false]))
console.log(removeEmptySpots([0,100,'a','b',50,null]))


