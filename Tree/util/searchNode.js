module.exports = function serachNode(node, key) {
  if (!node) {
    return null
  }

  if(key < node.left) {
    searchNode(node.left, key)
  } else if(key > node.right) {
    searchNode(node.right, key)
  } else {
    return true
  }
}
