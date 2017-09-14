module.exports = function postOrderTraverseNode(node, callbcak) {
  if (node !== null) {
    postOrderTraverseNode(node.left, callbcak)
    postOrderTraverseNode(node.right, callbcak)
    callback(node.key)
  }
}
