const Dictionary = require('../Dictionary/Dictionary')
const initializeState = require('./util/initializeState')
const { UNDISCOVERED, DISCOVERED, EXPLORED } = require('./util/vertexState')
const Queue = require('../Queue/Queue')
const DFSVisit = require('./util/DFSVisit')

module.exports = class Graph {
  constructor() {
    this.vertices = []
    this.adjList = new Dictionary()
  }
  addVertex(v) {
    this.vertices.push(v)
    this.adjList.set(v, [])
  }
  addEdge(v1, v2) {
    // no distances
    this.adjList.get(v1).push(v2)
    this.adjList.get(v2).push(v1)
  }
  toString() {
    let str = ''
    for(let vertex of this.vertices) {
      str += `${vertex} -> `
      let neighbors = this.adjList.get(vertex)
      for(let neighbor of neighbors) {
        str += `${neighbor} `
      }
      str += '\n'
    }
    return str
  }
  BFS(v, callback) {
    let stateVertices = initializeState(this.vertices),
        queue = new Queue()
    queue.enqueue(v)

    while(!queue.isEmpty) {
      let currentVertex = queue.dequeue(),
          neighbors = this.adjList.get(currentVertex)

      stateVertices[currentVertex] = DISCOVERED
      for(let neighbor of neighbors) {
        if(stateVertices[neighbor] === UNDISCOVERED) {
          stateVertices[neighbor] = DISCOVERED
          queue.enqueue(neighbor)
        }
      }
      stateVertices[currentVertex] = EXPLORED
      if(callback) {
        callback(currentVertex)
      }
    }
  }
  BFSPath(v) {
    let stateVertices = initializeState(this.vertices),
        distances = {},
        predecessors = {},
        queue = new Queue()

    for(let vertex of this.vertices) {
      distances[vertex] = 0
      predecessors[vertex] = null
    }
    queue.enqueue(v)

    while(!queue.isEmpty()) {
      let currentVertex = queue.dequeue(),
          neighbors = this.adjList.get(currentVertex)

      stateVertices[currentVertex] = DISCOVERED
      for(let neighbor of neighbors) {
        if(stateVertices[neighbor] === UNDISCOVERED) {
          stateVertices[neighbor] = DISCOVERED
          distances[neighbor] = distances[currentVertex] + 1
          predecessors[neighbor] = currentVertex
          queue.enqueue(neighbor)
        }
      }
      stateVertices[currentVertex] = EXPLORED
    }

    return {
      predecessors,
      distances
    }
  }
  DFS(callback) {
    let stateVertices = initializeState(this.vertices)
    for(let vertex of this.vertices) {
      if(stateVertices[vertex] === UNDISCOVERED) {
        DFSVisit(vertex, stateVertices, callback, this)
      }
    }
  }
}
