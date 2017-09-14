module.exports = function maxNode(node) {
  if(node) {
    while(node && node.right) {
      node = node.right
    }
    return node.key
  }
  return null
}
