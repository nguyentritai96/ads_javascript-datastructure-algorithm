class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    // Hoàn thiện dữ liệu từ sau ra trước
    // Hoàn thiện nút cuối
    newNode.prev = this.tail

    // Nút kế cuối
    this.tail.next = newNode;
    // --- Xong cho head ---

    // Trỏ cho tial
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    // Hoàn thiện từ trước ra sau
    newNode.next = this.head;

    // Nút thứ 2
    this.head.prev = newNode
    this.head = newNode;
    // --- Xong cho head ---
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array;
  }
  insert(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      return this.append(value);
    }
    
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    const leader = this.traverseToIndex(index-1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  reverse() {
      if (!this.head.next) {
        return this.head;
      }
      
      this.tail = this.head;
    
      let first = this.head;
      let second = first.next;
      
      while(second) {
        const temp = second.next;
        second.next = first;
        second.prev = temp;
        first = second;
        second = temp;
      }
  
      this.head.next = null; // Gắn null cho tail
      this.head = first;
      return this.printList();
  }
}

let myLinkedList = new DoublyLinkedList(2);
myLinkedList.append(4)
myLinkedList.append(5)
myLinkedList.prepend(1)
myLinkedList.insert(2, 3)
// myLinkedList.insert(20, 88)
// myLinkedList.printList()
// myLinkedList.remove(2)
myLinkedList.reverse()

console.log(myLinkedList.head.next)