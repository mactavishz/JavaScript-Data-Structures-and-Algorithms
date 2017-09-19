const Node = require('./Node')
const insertNode = require('./util/insertNode')
const inOrderTraverseNode = require('./util/inOrderTraverseNode')
const preOrderTraverseNode = require('./util/preOrderTraverseNode')
const postOrderTraverseNode = require('./util/postOrderTraverseNode')
const minNodeKey = require('./util/minNodeKey')
const maxNodeKey = require('./util/maxNodeKey')
const searchNode = require('./util/searchNode')
const removeNode = require('./util/removeNode')

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(key) {
    var node = new Node(key)

    if(this.root === null) {
      this.root = node
    } else {
      insertNode(this.root, node)
    }
  }
  search(key) {
    return searchNode(this.root, key)
  }
  inOrderTraverse(callback) {
    inOrderTraverseNode(this.root, callback)
  }
  preOrderTraverse(callback) {
    preOrderTraverseNode(this.root, callback)
  }
  postOrderTraverse(callback) {
    postOrderTraverseNode(this.root, callback)
  }
  min() {
    return minNodeKey(this.root)
  }
  max() {
    return maxNodeKey(this.maxNodeKey)
  }
  remove(key) {
    root = removeNode(this.root, key)
  }
}
