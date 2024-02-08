function displayMessage(x) {
    let message = 'Hello'
    if (x) {
        let message = 'Hello, this is a scope problem!'
        console.log(message)
    }
    return message
    console.log(message)
}