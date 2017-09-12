const Node = require('./Node')
const twoWayLinkedList = require('./twoWayLinkedList')

class CircularLinkedList extends twoWayLinkedList {
  constructor() {
    super()
  }
  append(ele) {
    var node = new Node(ele)

    if(!this.head) {
      this.head = node
      this.tail = node
      node.next = this.head
      node.prev = this.tail
    } else {
      this.head.prev = node
      node.next = this.head
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
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
        if (!this.head) {
          this.head = node
          this.tail = node
          node.next = this.head
          node.prev = this.tail
        } else {
          node.next = currentNode
          currentNode.prev = node
          node.prev = this.tail
          this.head = node
          this.tail.next = this.head
        }
      } else if(pos === this.length){
        currentNode = this.tail
        currentNode.next = node
        node.prev = currentNode
        node.next = this.head
        this.tail = node
        this.head.prev = this.tail
      } else {
        while(index < pos) {
          previousNode = currentNode
          currentNode = currentNode.next
          index ++
        }
        node.next = currentNode
        previousNode.next = node

        currentNode.prev = node
        node.prev = previousNode
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
        if (this.length === 1) {
          this.head = null
          this.tail = null
        } else {
          this.head = currentNode.next
          this.head.prev = this.tail
          this.tail.next = this.head
        }
      } else if(pos === this.length - 1) {
        currentNode = this.tail
        this.tail = currentNode.prev
        this.tail.next = this.head
        this.head.prev = this.tail
      } else {
        while(index < pos) {
          previousNode = currentNode
          currentNode = currentNode.next
          index += 1
        }
        previousNode.next = currentNode.next
        currentNode.next.prev = previousNode
      }

      this.length -= 1
      return currentNode.element
    } else {
      return null
    }
  }
  indexOf(ele){
    var currentNode = this.head
    var index = 0

    while(index < this.length) {
      if(ele === currentNode.element) {
        return index
      }
      index += 1
      currentNode = currentNode.next
    }

    return -1
  }
  toString() {
    var currentNode = this.head
    var str = ''
    var index = 0

    while(index < this.length) {
      str += ',' + currentNode.element
      currentNode = currentNode.next
      index += 1
    }
    return str.slice(1)
  }
}

module.exports = CircularLinkedList
