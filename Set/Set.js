module.exports = class Set {
  constructor() {
    this.items = {}
  }
  add(value) {
    if(!this.has(value)) {
      items[value] = value
      return true
    }
    return false
  }
  remove(value) {
    if(this.has(value)) {
      return delete this.items[value]
    }
    return false
  }
  has(value) {
    return this.items.hasOwnProperty(value)
  }
  clear() {
    this.items = {}
  }
  size() {
    return Object.keys(this.items).length
  }
  values() {
    return Object.keys(this.items)
  }
  union(otherSet) {
    var unionSet = new Set()

    var values = this.values()
    for(let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    values = otherSet.values()
    for(let i = 0; i < values.length; i++) {
      unionSet.add(values[i])
    }

    return unionSet
  }
  intersection(otherSet) {
    var intersectionSet = new Set()

    var values = this.values()
    for(let i = 0; i < values.length; i++) {
      if(otherSet.has(values[i])) {
        intersectionSet.add(values[i])
      }
    }
  }
  difference(otherSet) {
    var differenceSet = new Set()

    var values = this.values()
    for(let i = 0; i < values.length; i++) {
      if(!otherSet.has(values[i])) {
        differenceSet.add(values[i])
      }
    }
  }
  subset(otherSet) {
    if(this.size() < otherSet.size()) {
      return false
    } else {
      var values = this.values()

      for(let i = 0; i < values.length; i++) {
        if(!otherSet.has(values[i])) {
          return false
        }
      }
    }
  }
}
