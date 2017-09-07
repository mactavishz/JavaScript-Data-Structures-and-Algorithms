module.exports = class Queue {
  constructor() {
    this.items = []
  }
  enqueue(ele) {
    this.items.push(ele)
  }
  dequeue(ele) {
    this.items.shift(ele)
  }
  front() {
    return this.items[0]
  }
  end() {
    return this.items[this.items.length - 1]
  }
  size() {
    return this.items.length
  }
  isEmpty() {
    return this.items.length === 0
  }
  clear() {
    this.items = []
  }
  print() {
    console.log(this.items)
  }
}
