const repeatString = function (string, num) {
  // ES6 repeat() method
  if (num > 0) {
    return string.repeat(num)
  } else if (num == 0) {
    return ''
  } else {
    return 'ERROR'
  }
}

module.exports = repeatString

/*  let input = string
  for (let i = 0; i <= num; i++) {
  } */
