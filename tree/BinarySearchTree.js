const Node = require('./Node')
const insertNode = require('./util/insertNode')
const inOrderTraverseNode = require('./util/inOrderTraverseNode')
const preOrderTraverseNode = require('./util/preOrderTraverseNode')
const postOrderTraverseNode = require('./util/postOrderTraverseNode')
const minNode = require('./util/minNode')
const maxNode = require('./util/maxNode')
const searchNode = require('./util/searchNode')

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
    return minNode(this.root)
  }
  max() {
    return mindNode(this.maxNode)
  }
}
