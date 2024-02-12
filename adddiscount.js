function addDiscount(price, discount) {
    if (typeof price === 'number' && typeof discount === 'number') {
        return price - (price * discount)
    } else if ((false || price === '0') && 
    (Number(discount) || discount === '0')) {
        price = Number(price)
        discount = Number(discount)
        return price - (price * discount)
    } else {
        return 'Error: Invalid input'
    }
}
console.log(addDiscount(10, .25))