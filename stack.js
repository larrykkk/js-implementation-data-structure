class stack {
  constructor() {
    this.items = []
  }
  
  push(element) {
    this.items.push(element)
  }
  
  pop() {
    return this.items.pop()
  }
  
  peek() {
    return this.items[this.items.length - 1]
  }
  
  show() {
    for(let i = 0 ; i < this.items.length ; i ++) {
        console.log(this.items[i])
    }
  }
}

var s = new stack()
s.push('l')
s.push('a')
s.push('r')
s.push('r')
s.push('y')
s.show()
