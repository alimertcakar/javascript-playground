class QueueNode {
  constructor(next = null, prev = null, value = null) {
    this.prev = prev;
    this.next = next;
    this.value = value;
  }
}

class Queue {
  first = new QueueNode();
  last = new QueueNode();
  constructor(value) {
    if (!value) {
      this.length = 0;
      return;
    }
    const queueNode = new QueueNode(null, null, value);
    this.first = queueNode;
    this.last = queueNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new QueueNode(null, this.last, value);
    if (this.length === 0) {
      this.first = newNode;
    }
    this.last.next = newNode;
    this.last = newNode;
    this.length++;
  }
  dequeue() {
    const poppedItem = this.first.value;
    const oldFirst = this.first;
    this.first = oldFirst.next;
    return poppedItem;
  }
}

const myQueue = new Queue();

myQueue.enqueue("hey");
myQueue.enqueue("second hey");
myQueue.enqueue("third hey");
myQueue.enqueue("forth hey");
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
