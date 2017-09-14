module.exports = function insertNode(node, newNode) {
  if(newNode.key < node.key) {
    if(node.left === null) {
      node.left = newNode
    } else {
      insertNode(node.left, newNode)
    }
  } else {
    if(node.right === null) {
      node.right = newNode
    } else {
      insertNode(node.right, newNode)
    }
  }
}
