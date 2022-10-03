/* When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number */

let fizz = 'Fizz'
let buzz = 'Buzz'
let fizzbuzz = 'FizzBuzz'
let num = getDocumentById('Number')

// When a user inputs a number
let answer = parseInt(
  prompt('Please enter the number you would like to FizzBuzz up to: ')
)
// Loop from 1 to the entered number
for (let i = 1; i <= answer; i++) {
  if (answer % 3 == 0 && num % 5 == 0) {
    // If the current number is divisible by 3 and 5 then print "FizzBuzz"
    // check that i is divisible by both 3 and 5 before moving on to check if it is divisible by 3 or 5 individually
    console.log('FizzBuzz')
  } else if (answer % 3 == 0) {
    // If the current number is divisible by 3 then print "Fizz"
    console.log('Fizz')
  } else if (answer % 5 == 0) {
    // If the current number is divisible by 5 then print "Buzz"
    console.log('Buzz')
  } else {
    // Otherwise print the current number
    console.log(i)
  }
}
