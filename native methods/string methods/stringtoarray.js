/* Create a JavaScript function named splitStringIntoArray.
This function should take two parameters: a string and a delimiter. 
It should divide the string into an array of substrings, separated by the 
specified delimiter, and return the resulting array. */

function splitStringIntoArray(txt, del){
    return txt.split(del)
}

console.log(splitStringIntoArray('apple,banana,cherry',','))//['apple','banana','cherry']
console.log(splitStringIntoArray('Hello World',' ')) //	['Hello','World']
console.log(splitStringIntoArray('one-two-three','-')) //['one','two','three']