/* Your task is to create a function called markAsPaid.
This function should take an object as its only parameter (a bill), 
update the status property of the bill to paid, and then return the updated object.

let a = {"total": "105", "status": "pending"}
markAsPaid(a) // {"total": "105", "status": "paid"}
let b = {"total": "33.2", "status": "pending"}
markAsPaid(b) // {"total": "33.2", "status": "paid"} */

function markAsPaid(bill) {
    bill.status = 'paid'
    return bill
}

let paidBill3 = markAsPaid ({total: 54.87, status: 'pending', location: 'Thailand', time: '10pm'})
console.log(paidBill3)