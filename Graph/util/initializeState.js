const { UNDISCOVERED } = require("./VertexState")
module.exports = function initializeState(vertices) {
  let stateVertices = {}
  for(let vertex of vertices) {
    stateVertices[vertex] = UNDISCOVERED
  }
  return stateVertices
}
