const Node = require('./Node')

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }
  append(ele) {
    var node = new Node(ele)
    var currentNode

    if(!this.head) {
      this.head = node
    } else {
      currentNode = this.head

      while(currentNode.next) {
        currentNode = currentNode.next
      }

      currentNode.next = node
    }

    this.length += 1
  }
  insert(pos, ele) {
    if(pos > -1 && pos <= this.length) {
      var node = new Node(ele)
      var currentNode = this.head
      var index = 0
      var previousNode

      if(pos === 0) {
        node.next = currentNode
        this.head = node
      } else {
        while(index < pos) {
          previousNode = currentNode
          currentNode = currentNode.next
          index += 1
        }
        previousNode.next = node
        node.next = currentNode
      }

      this.length += 1

      return true
    } else {
      return false
    }
  }
  removeAt(pos) {
    if(pos > -1 && pos < this.length) {
      var currentNode = this.head
      var previousNode
      var index = 0

      if(pos === 0) {
        this.head = currentNode.next
      } else {
        while(index < pos) {
          previousNode = currentNode
          currentNode = currentNode.next
          index += 1
        }
        previousNode.next = currentNode.next
      }

      this.length -= 1
      return currentNode.element
    } else {
      return null
    }
  }
  remove(ele) {
    var index = this.indexOf(ele)
    return this.removeAt(index)
  }
  indexOf(ele){
    var currentNode = this.head
    var index = 0

    while(currentNode) {
      if(ele === currentNode.element) {
        return index
      }
      index += 1
      currentNode = currentNode.next
    }

    return -1
  }
  size() {
    return this.length
  }
  getHead() {
    return this.head
  }
  toString() {
    var currentNode = this.head
    var str = ''

    while(currentNode) {
      str += ',' + currentNode.element
      currentNode = currentNode.next
    }
    return str.slice(1)
  }
  print() {
    console.log(this.toString())
  }
}

module.exports = LinkedList
