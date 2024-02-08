/* Use a shortcut in the following function to 
replace the increment of i in the loop and the increment of sum.

function timer() {
  let sum = 0
  for (let i = 0; i < 10; i = i + 1) {
    sum = sum + 1
  }
  return sum
}
*/

function timer() {
    let sum = 0
    for (let i = 0; i < 10; i++) {
      sum += 1
    }
    return sum
  }
