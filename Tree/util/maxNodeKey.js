module.exports = function maxNodeKey(node) {
  if(node) {
    while(node && node.right) {
      node = node.right
    }
    return node.key
  }
  return null
}
