const Stack = require("../Stack")

function integerToBinary(num) {
  var remStack = new Stack(),
      rem,
      binaryString = ''

  // make sure the number is a integer
  num = Math.floor(num)
  while(num > 0) {
    rem = num % 2
    remStack.push(rem)
    num = Math.floor(num / 2)
  }

  while(!remStack.isEmpty()) {
    binaryString += remStack.pop().toString()
  }

  return binaryString
}
