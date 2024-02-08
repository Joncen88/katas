/* Your task is to create a JavaScript function named addAge.
This function should take two parameters: an object and a number.
The function should add the provided number to the object as age and return the updated object. */

function addAge(obj, num) {
    obj.age = num
    return obj
 }




console.log(addAge({'name':'Alice'},25))