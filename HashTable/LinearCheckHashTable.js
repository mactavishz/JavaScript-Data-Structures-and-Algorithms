const HashTable = require('./HashTable')
const ValuePair = require('./util/ValuePair')
const loseloseHashCode = require('./util/loseloseHashCode')

module.exports = class LinearCheckHashTable extends HashTable {
  constructor() {
    super()
  }
  put(key, value) {
    var pos = loseloseHashCode(key)

    if(this.table[pos] === undefined) {
      this.table[pos] = new ValuePair(key, value)
    } else {
      var idx = ++pos
      while(this.table[idx] !== undefined) {
        idx++
      }
      this.table[idx] = new ValuePair(key, value)
    }
  }
  get(key) {
    var pos = loseloseHashCode(key)

    if(this.table[pos] !== undefined) {
      if(this.table[pos].key === key) {
        return this.table[pos].value
      } else {
        var idx = ++pos
        while(this.table[idx] !== undefined &&
          (this.table[idx] && this.table[idx].key !== key)) {
          idx++
        }
        if(table[idx] && table[idx].key === key) {
          return table[idx].value
        }
      }
    }
    return undefined
  }
  remove(key) {
    var pos = loseloseHashCode(key)

    if(this.table[pos] !== undefined) {
      if(this.table[pos].key === key) {
        this.table[pos] = undefined
        return true
      } else {
        var idx = ++pos
        while(this.table[idx] !== undefined &&
          (this.table[idx] && this.table[idx].key !== key)) {
          idx++
        }
        if(this.table[idx] && this.table[idx].key === key) {
          this.table[idx] = undefined
          return true
        }
      }
    }
    return false
  }
}
