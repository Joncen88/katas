function halfOrDouble(numbers) {
for (let i =0; i < numbers.length; i++) {
    if (numbers[i] <= 10) {
        numbers[i] *=  2
    }
    else {
        numbers[i] /= 2
    }
    return numbers
    }
}
    console.log(halfOrDouble([10, 5, 2, 14]))