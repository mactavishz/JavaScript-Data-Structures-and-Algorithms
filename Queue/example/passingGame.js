const Queue = require('../Queue')

function passingGame(list, time) {
  var queue =  new Queue()
  list.forEach(item => queue.enqueue(item))

  var eliminated = ''
  while(queue.size() > 1) {
    for(let i = 0; i < time; i++) {
      queue.enqueue(queue.dequeue())
    }
    var eliminated = queue.dequeue()
    console.log(`${eliminated} has been eliminated from the queue.`)
  }

  return queue.dequeue()
}

var list = ['A', 'B', 'C', 'D', 'E']
console.log(`Winner is ${passingGame(list, 6)}`)
