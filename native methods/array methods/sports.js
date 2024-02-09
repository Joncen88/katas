/* Create a function addSportsLengths that takes an array of objects.
Each object contains an array of sports.
The function should add a property sportsLength to each object, with the length of its sports array. */

function addSportsLengths(arr) {
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i]
        obj.sportsLength = obj.sports.length
    }

    return arr
}


console.log(addSportsLengths([{'name':'John','sports':['football']},{'name':'Alice','sports':['tennis','golf']}]))

// expected: [{'name':'John','sports':['football'],'sportsLength':1},{'name':'Alice','sports':['tennis','golf'],'sportsLength':2}]

