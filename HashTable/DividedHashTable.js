const HashTable = require('./HashTable')
const LinkedList = require('../LinkedList/LinkedList')
const ValuePair = require('./util/ValuePair')
const loseloseHashCode = require('./util/loseloseHashCode')

module.exports = class DividedHashTable extends HashTable {
  constructor() {
    super()
  }
  put(key, value) {
    var pos = loseloseHashCode(key)

    if(this.table[pos] === undefined) {
      this.table[pos] = new LinkedList()
    }
    this.table[pos].append(new ValuePair(key, value))
  }
  get(key) {
    var pos = loseloseHashCode(key)

    if(this.table[pos] !== undefined) {
      var current = this.table[pos].getHead()

      while(current.next) {
        if(current.element.key === key) {
          return current.element.value
        }
        current = current.next
      }

      // check the first or the last item in the linked list
      if(current.element.key === key) {
        return current.element.value
      }
    }
    return undefined
  }
  remove(key) {
    var pos = loseloseHashCode(key)

    if(this.table[pos] !== undefined) {
      var current = this.table[pos].getHead()

      while(current.next) {
        if(current.element.key === key) {
          this.table[pos].remove(current.element)
          if(this.table[pos].isEmpty()) {
            this.table[pos] = undefined
          }
          return true
        }
        current = current.next
      }

      // check the first or the last item in the linked list
      if(current.element.key === key) {
        this.table[pos].remove(current.element)
        if(this.table[pos].isEmpty()) {
          this.table[pos] = undefined
        }
        return true
      }
    }
    return false
  }
}
