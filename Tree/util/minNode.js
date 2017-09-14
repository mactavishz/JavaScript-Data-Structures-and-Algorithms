module.exports = function minNode(node) {
  if(node) {
    while(node && node.left) {
      node = node.left
    }
    return node.key
  }
  return null
}
