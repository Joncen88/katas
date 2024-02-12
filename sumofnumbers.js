/* Create a function sumNumbers that takes an array as a parameter.
The array can contain a combination of numbers, strings and booleans.
The function should find all numbers in the array, add them and return the sum.
If there are no numbers, the function should return 0.*/

function sumNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        sum += arr[i]
    } else if (typeof arr[i] === 'string' && !isNaN(arr[i])) {
        sum += parseFloat(arr[i])
    }
    } 
    return sum
  }
  
console.log(sumNumbers([10,5]))
console.log(sumNumbers(['10', 5,'20',5]))
console.log(sumNumbers(['hello',-20,3]))
console.log(sumNumbers(['yes','no']))
console.log(sumNumbers([true,'no',0.9,0.1,false,'yes']))
console.log([])
