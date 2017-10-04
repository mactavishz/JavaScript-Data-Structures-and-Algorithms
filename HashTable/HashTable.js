const loseloseHashCode = require('./util/loseloseHashCode')

// under this circumstance, the hash key may be conflicted
module.exports = class HashTable {
  constructor() {
    this.table = []
  }
  put(key, value) {
    var pos = loseloseHashCode(key)
    console.log(`${pos} -> ${value}`)
    this.table[pos] = value
  }
  remove(key, value) {
    this.table[loseloseHashCode(key)] = undefined
  }
  get(key) {
    return this.table[loseloseHashCode(key)]
  }
}
