/* Your task is to write a JavaScript function that uses a "for" loop to extract 
the first n elements from an array of numbers and return them in descending order.
The function, named extractAndSort, will take two parameters: an array of numbers 
and a numerical value n indicating how many elements to extract.
Before returning the output array, convert it into a string. */
/*
function extractAndSort(numbers, n) {
    numbers.sort((a, b) => b - a);
    const extracted = [];
    for (let i = 0; i < n && i < numbers.length; i++) {
        extracted.push(numbers[i]);
    }
    const result = extracted.join(', ');  
    return result;
} */
/* function calcAreaRectangle(a, b){
    return a * b
}

function calcAreaTriangle(a, b){
    return (a * b) / 2
}

function calcArea(a, b, shape) {
    if(shape === 'rectangle') {
        return calcAreaRectangle(a, b)
    } else if (shape === 'triangle') {
        return calcAreaTriangle(a, b)
    } else return 'null'
}


console.log(calcArea(100, 5, 'rectangle')) // 500
console.log(calcArea(100, 50, "triangle")) // 2500
calcArea(10, 10, "rectangle") // 100
calcArea(10, 10, "triangle") // 50
console.log(calcArea(30, 20)) // null
calcArea(30, 20, "cube") // null
*/
/* function isEven(number) {
    return number % 2 === 0
} 

function sumEvenNumbers(arr) {
    let sum = 0
    for (let num of arr) {
        if (isEven(num)) {
            sum = sum + num
        }
    }
    return sum
}

console.log(sumEvenNumbers([1, 20, 5, 4]))
console.log(sumEvenNumbers([0, 100, -20, 5.5, -10]))
*/
/* function sumNumbers(arr) {
    let sum = 0
    for (let num of arr) {
        if (typeof num === 'number') {
            sum = sum + num
        }
    }
    return sum
}
console.log(sumNumbers([10,5]))
console.log(sumNumbers(['10',5,'20',5]))	
console.log(sumNumbers(['hello',-20,3]))
console.log(sumNumbers(['yes','no']))	
console.log(sumNumbers([true,'no',0.9,0.1,false,'yes']))
console.log(sumNumbers([])) */

function calculateTotalPrice(objs) {
    let totalPrice = 0
    for (let obj of objs) {
        totalPrice = totalPrice + item.price
    }
    return totalPrice
}

console.log(calculateTotalPrice([{'name':'Bag','price':90},{'name':'Shoes','price':100}]))