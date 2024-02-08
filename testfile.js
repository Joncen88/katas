function sumPositives(numbers) {
    let sum = 0
    for (let number of numbers) {
        if (number < 0) {
            number = (number * -1)
        }
        sum = sum + number
    }
    return sum
}
console.log(sumPositives([5, -10, 15]))