/* Your task is to write a JavaScript function that uses a "for" loop to extract the first n elements from an array of numbers and return them in descending order.
The function, named extractAndSort, will take two parameters: an array of numbers and a numerical value n indicating how many elements to extract.
Before returning the output array, convert it into a string. */
 
function extractAndSort(numbers, n) {
    let result = [];
    let j = 0
    for (i = n - 1; i >= 0; i -1) {
        result[n] = numbers[i]
        j = j + 1
        console.log(i, j)
    }
    return String(result);
}