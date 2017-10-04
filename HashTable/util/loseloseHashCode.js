module.exports = function loseloseHashCode(key) {
  var hash = 0
  for(let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i)
  }
  // mod is a optional number
  return hash % 37
}
