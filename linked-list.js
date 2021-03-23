class Node {
    constructor(item) {
      this.item = item
      this.next = null
    }
  }
  
class linkedList {
    constructor() {
        this.length = 0
        this.head = null
    }

    append(item){
        let node = new Node(item)
        if(!this.head){
            this.head = node
        } else {
        let tail = this.head;
        
        while(tail.next) {
            tail = tail.next
        }
        
        tail.next = node
        
        }
        this.length ++
    }

    removeAt(index){
        
        if(index < 0 || index > this.length - 1) {
        return null
        }
        
        let current = this.head,
        prev = null,
        idx = 0
        
        if(index == 0){
        current = current.next
        } else {
        while(idx ++ < index) {
            prev = current
            current = current.next
        }
        prev.next = current.next
        }
        this.length --
    }

    insertAt(index, item) {
        if(index < 0 || index > this.length ) return null
        
        let current = this.head,
            prev = null,
            next = null,
            idx = 0
        
        let node = new Node(item)
        
        if(index === 0) {
            this.head = node
            node.next = current
        } else {
            
            while(idx++ < index) {
                prev = current
                current = current.next
            }
            prev.next = node
            node.next = current
        }
        this.length ++
    }
}
