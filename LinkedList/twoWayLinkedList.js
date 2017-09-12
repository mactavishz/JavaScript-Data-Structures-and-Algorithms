const Node = require('./Node')
const LinkedList = require('./LinkedList')

class twoWayLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = null
  }
  append(ele) {
    var node = new Node(ele)

    if(!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
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
        } else {
          node.next = currentNode
          currentNode.prev = node
          this.head = node
        }
      } else if(pos === this.length){
        currentNode = this.tail
        currentNode.next = node
        node.prev = currentNode
        this.tail = node
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
        this.head = currentNode.next
        this.tail = this.length !== 1 ? this.tail : null
        this.head.prev = null
      } else if(pos === this.length - 1) {
        currentNode = this.tail
        this.tail = currentNode.prev
        this.tail.next = null
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
  getTail() {
    return this.tail
  }
}

module.exports = twoWayLinkedList
