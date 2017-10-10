const Graph = require('../Graph')
const Stack = require('../../Stack/Stack')

let graph = new Graph()
for(let i = 65; i < 74; i++) {
  graph.addVertex(String.fromCharCode(i))
}

// add edges from each vertex
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('A', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'G')
graph.addEdge('D', 'G')
graph.addEdge('D', 'H')
graph.addEdge('B', 'E')
graph.addEdge('B', 'F')
graph.addEdge('E', 'I')

let fromVertex = graph.vertices[0]
// get shortest path for vertex 'A'
let shortestPathA = graph.BFSPath(fromVertex)

// log all the path from 'A' to the rest vertices
for(let vertex of graph.vertices) {
  if(vertex === fromVertex) continue
  let toVertex = vertex,
      path = new Stack()

  for(let pre = toVertex; pre!== fromVertex; pre = shortestPathA.predecessors[pre]) {
    path.push(pre)
  }
  path.push(fromVertex)
  let str = path.pop()
  while(!path.isEmpty()) {
    str += ` -> ${path.pop()}`
  }
  console.log(str)
}
