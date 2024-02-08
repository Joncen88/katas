/* Create a JavaScript function named formatDisplayName that takes two parameters: a user's first name and last name.
If the last name is not provided, the function should return the error message: "Last name missing".
The function should check if both parameters are strings and then return a formatted full name with a space in between.
If either parameter is not a string, the function should return the error message: "Error, not a string". */
function formatDisplayName(firstName, lastName) {
    if (typeof firstName == 'string' && typeof lastName === 'string') {
        return firstName + ' ' + lastName
    } else if (typeof lastName === 'undefined'){
        return 'Last name missing'
    }else {
        return 'Error, not a string'
    }
    }