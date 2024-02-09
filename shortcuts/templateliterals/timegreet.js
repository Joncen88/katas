/* Create an arrow function greetTime that takes a parameter time (a number).
Inside the function, create a second arrow function checkTime that takes a parameter t (a number).
Within the checkTime function, use a ternary operator to check if t is less than 12, if it is, 
return 'morning', otherwise return 'evening'.
Within the greetTime function, return a template literal that includes the invokation of the function checkTime, 
passing time as a parameter, to then return either of the following strings:

'Good morning'
'Good evening' */

const greetTime = n => {const checkTime = t => t < 12 ? 'morning' : 'evening'
    return `Good ${checkTime(n)}`
}
    


console.log(greetTime(14))