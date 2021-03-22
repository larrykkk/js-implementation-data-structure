function Queue(){
  let data = []
  let head = 0
  let tail = 0
  
  this.enqueue = function(element) {
    data[tail] = element
    tail ++
  }
  
  this.dequeue = function() {
    let item = data[head]
    delete data[head]
    head ++
    return item
  }
}
