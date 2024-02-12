function sumNumbers(n) {
    let sum = 0;
    for (let x = 1; x <= n; x++) {
        sum += x;
    }
    return sum;
}

console.log(sumNumbers(30))