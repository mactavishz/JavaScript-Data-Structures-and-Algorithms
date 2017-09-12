class Stack {
  constructor() {
    this.items = []
  }
  push(ele) {
    this.items.push(ele)
  }
  pop() {
    return this.items.pop()
  }
  top() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  size() {
    return this.items.length
  }
  destroy() {
    this.items = []
  }
  print() {
    console.log(this.items)
  }
}

module.exports = Stack
