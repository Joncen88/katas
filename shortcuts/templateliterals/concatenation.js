/* Convert the following String Concatenation into a Template Literal.

function greet(age, city) {
    return 'Hello, I\'m ' + age + ' years old and I\'m from ' + city + '!'
} */

function greet(age, city) {
    return `Hello, I'm ${age} years old and I'm from ${city}!`
}

console.log(greet(24, 'Japan'))