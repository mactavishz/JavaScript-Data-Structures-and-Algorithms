const Queue = require('./Queue')

class PriorityQueue extends Queue {
  constructor() {
    super()
  }
  enqueue(ele, prior) {
    var curEle = new QueueElement(ele, prior)

    if(this.isEmpty() || curEle.priority > this.end().priority) {
      this.items.push(curEle)
    } else {
      for(let i = 0; i < this.size(); i++) {
        if (curEle.priority < this.items[i].priority) {
          this.items.splice(i, 0, curEle)
          break
        }
      }
    }
  }

}

class QueueElement {
  constructor(ele, prior) {
    this.element = ele
    this.priority = prior
  }
}
