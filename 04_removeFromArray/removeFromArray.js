// rest parameter syntax allows a function to accept an indefinite number of arguments as an array
const removeFromArray = function (array, ...args) {
  // filter the original array and filter out those elements that are in array args
  return array.filter((x) => !args.includes(x))
}
module.exports = removeFromArray

/* const removeFromArray = function (arr, value) {
  // store array as variable
  let myArray = arr
  // store value to remove as variable
  let remove = value
  // loop through the array
  myArray = myArray.filter((item) => item !== remove)
  console.log(myArray)
}
// removeFromArray([1, 2, 3, 4], 3)

// Do not edit below this line
module.exports = removeFromArray */

/* function removeFromArray(array, remove) {
  // store array as variable
  let myArray = array
  // store item to remove as variable
  let removeItem = remove
  // loop through the array
  for (let i = 0; i < myArray.length; i++) {
    // if the current item in the loop equals the item to remove
    if (myArray[i] === removeItem) {
      // then, remove the item located at the current index i
      myArray.splice(i, 1)
      // decrement the count on the array length
      i--
    }
    console.log(myAray[2])
  }
} */
// removeFromArray([1, 2, 3, 4], 3)

// ES-6 syntax using arrow function in .filter()
/* function removeFromArray(arr, value) {
  // store array as variable
  let myArray = arr
  // store value to remove as a variable
  let remove = value
  // loop through the array and filter out items that equal remove
  myArray = myArray.filter((item) => item !== remove)
  return myArray
}
removeFromArray([1, 2, 3, 4], 3) */

// Using ES-5 .filter() method
/* function removeFromArray(arr, value) {
  // store array as variable
  let myArray = [1, 2, 3, 4]
  console.log(myArray)
  // store value to remove as variable
  let remove = 3
  console.log(remove)
  // loop through the array
  myArray = myArray.filter(function (item) {
    return item !== remove
  })
  console.log(myArray)
}
removeFromArray() */
// removeFromArray([1, 2, 3, 4], 3)
