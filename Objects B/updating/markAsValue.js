/* Your task is to create a function called markAsValue.
This function should take 2 parameters: an object (a bill), and a string (a value).
The function should update the status property of the bill to value parameter, 
and then return the updated object.

let a = {"total": "99", "status": "pending"}
markAsValue(a, "accepted") // {"total": "99", "status": "accepted"}
let b = {"total": "71.5", "status": "pending"}
markAsValue(b, "denied") // {"total": "71.5", "status": "denied"} */

function markAsValue(bill, value) {
    bill.status = value
    return bill
}

let billValue = markAsValue({total: 71.5, status: 'denied'}) // {"total": "99", "status": "accepted"}
console.log(billValue)