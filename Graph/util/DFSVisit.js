const { UNDISCOVERED, DISCOVERED, EXPLORED } =  require('./vertexState')
module.exports = function DFSVisit(vertex, vertexStateList, callback, self) {
  vertexStateList[vertex] = DISCOVERED
  if(callback) {
    callback(vertex)
  }
  
  let neighbors = self.adjList.get(vertex)
  for(let neighbor of neighbors) {
    if(vertexStateList[neighbor] === UNDISCOVERED) {
      DFSVisit(neighbor, vertexStateList, callback, self)
    }
  }
  vertexStateList[vertex] = EXPLORED
}
