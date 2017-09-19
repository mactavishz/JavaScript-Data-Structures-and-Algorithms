const findMinNode = require('./findMinNode')
module.exports = function removeNode(node, key) {
  if(!node) {
    return null
  }
  if(key < node.key) {
    node.left = removeNode(node.left, key)
    return node
  } else if (key > node.right) {
    node.right = removeNode(node.right, key)
    return node
  } else {
    if(node.left === null && node.right === null) {
      node = null
      return node
    }
    if (node.left === null) {
      node = node.right
    } else if (node.right === null) {
      node = node.left
      return node
    }

    var replaceNode = findMinNode(node.right)
    node.key = replaceNode.key
    node.right = removeNode(node.right, replaceNode.key)
    return node
  }
}
