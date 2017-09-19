module.exports = function findMinNode(node) {
  if(node) {
    while(node && node.left) {
      node = node.left
    }
    return node
  }
  return null
}
