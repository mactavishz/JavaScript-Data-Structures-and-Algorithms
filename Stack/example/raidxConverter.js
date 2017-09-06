const Stack = require("../Stack")

function radixConverter(num,radix) {
  var remStack = new Stack(),
      rem,
      baseString = '',
      digits = '0123456789ABCDEF'

  while(num > 0) {
    rem = Math.floor(num % radix)
    remStack.push(digits[rem])
    num = Math.floor(num / 2)
  }

  while(!remStack.isEmpty()) {
    baseString += remStack.pop().toString()
  }

  return baseString
}
