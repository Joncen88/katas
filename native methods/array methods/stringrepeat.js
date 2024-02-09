/*  Create a function stringRepeat that takes a number and a string, then returns the string repeated as many times as the number.

Tests:

stringRepeat(5, 'hi') // 'hihihihihi'
stringRepeat(2, 'hola') // 'holahola' */


function stringRepeat(num, txt) { 
    let newTxt = "" 
    for (let i = 0; i < num; i++) {
        newTxt += txt
    }
    return newTxt
}

console.log(stringRepeat(9, 'hello'))
console.log(stringRepeat(3, 'hola'))
//return txt.repeat(num)