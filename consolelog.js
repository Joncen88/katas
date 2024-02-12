function calculateDiscount(price, category) {
    let discount
    if (category === 'electronics') {
        discount = price * 0.10
        console.log(8, 'electronics')
    } 
    else {
        discount = price * 0.05
        console.log((10, 'shoes'))
    }
    return discount
}
