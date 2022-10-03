const reverseString = function (string) {
  // store string as variable
  // spread operator turns string into an array
  let inputArray = [...string]
  // reverse the array
  let reverseArray = inputArray.reverse()
  // join array as string without commas using join('') method
  let output = reverseArray.join('')
  // return new string
  return output
}

module.exports = reverseString

/* function reverseString(string) {
  let inputArray = [...string]
  let reverseArray = inputArray.reverse()
  let output = reverseArray.join('')
  console.log(output)
}
reverseString('word') */
