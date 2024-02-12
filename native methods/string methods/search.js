/* Create a function search that takes two parameters: an array of strings, and a string keyword.
The function should return the string from the array that contains the keyword.
Assume that there is only 1 string containing the keyword. */

function search(arr, txt) {
    for (let i = 0; i < array.length; i++) {
    if (arr[i].includes(txt)) {  
    return arr[i]
}
}
}

console.log(search(['hello world','good morning'],'world')) //'hello world'
console.log(search(['123456','911'],'9')) // '911'


