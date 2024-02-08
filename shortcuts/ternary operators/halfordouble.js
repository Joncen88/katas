/* Half or Double
Create a function halfOrDouble that takes an array of numbers.
The function should then check the value of each number and, if it's greater than 10, it should halve it, otherwise it should double it.
The function should then return the updated array.
Use a ternary operator. */

function halfOrDouble(numbers) {
    let i = 0
    for (let number of numbers) {
        numbers[i] = number > 10 ? number / 2 : number * 2
        i++
     }
    return numbers
    }
    //let num = n > 10 ? arr / 2 : arr * 2
   // return i => i > 10 ? i / 2 : i * 2

   

console.log(halfOrDouble([10, 5, 2, 14]))


/* for (let i =0; i < numbers.length; i++) {
if (numbers[i] <= 10) {
    numbers[i] *=  2
}
else {
    numbers[i] /= 2
}
}*/



/*   TESTS 
halfOrDouble([10,5,2,14])	
halfOrDouble([-20,1,70,2,9,0,16])	
halfOrDouble([]) */