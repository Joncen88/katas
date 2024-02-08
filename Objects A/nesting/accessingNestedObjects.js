/*
Your task is to create a function named getNestedProperty.
This function should take an object as its parameter.
The object will have a nested structure, with an object inside the main object.
You need to access the email property inside the nested object and return its value. */

function getNestedProperty(user) {
    // let contacts = {
    //     email: 'alice@example.com'
    //     email: 'bob@example.com'
    // }

    return user.contact.email

}

console.log(getNestedProperty(
    {
        'contact': {
            'email':'alice@example.com'
        }
    }
))