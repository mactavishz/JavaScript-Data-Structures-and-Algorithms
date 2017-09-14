module.exports = function inOrderTraverseNode(node, callback) {
  if(node !== null) {
    inOrderTraverseNode(node.left, callback)
    callback(node.key)
    inOrderTraverseNode(node.right, callback)
  }
}
