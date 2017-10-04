module.exports = class Dictionary {
  constructor() {
    this.items = {}
  }
  set(key, value) {
    this.items[key] = value
  }
  remove(key) {
    if(this.has(key)) {
      return delete this.items[key]
    }
    return false
  }
  has(key) {
    return this.items.hasOwnProperty(key)
  }
  get(key) {
    return this.has(key) ? this.items[key] : undefined
  }
  clear() {
    this.items = {}
  }
  size() {
    return Object.keys(this.items).length
  }
  keys() {
    return Object.keys(this.items)
  }
  values() {
    var values = []
    for(let key in this.items) {
      if(this.items.hasOwnProperty(key)) {
        values.push(this.items[key])
      }
    }
    return values
  }
}
