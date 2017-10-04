const djb2HashCode = require('./util/djb2HashCode')

// a better hash function than 'lose lose'
module.exports = class HashTable {
  constructor() {
    this.table = []
  }
  put(key, value) {
    var pos = djb2HashCode(key)
    console.log(`${pos} -> ${value}`)
    this.table[pos] = value
  }
  remove(key, value) {
    this.table[djb2HashCode(key)] = undefined
  }
  get(key) {
    return this.table[djb2HashCode(key)]
  }
}
