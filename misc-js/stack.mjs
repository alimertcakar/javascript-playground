class StackNode {
  constructor(prev = null, value) {
    this.prev = prev;
    this.value = value;
  }
}

class Stack {
  constructor(value) {
    const stackNode = new StackNode(null, value);
    this.top = stackNode;
    this.bottom = stackNode;
    this.length = 1;
  }

  pop() {
    if (this.top === this.bottom) {
      this.top = null;
      this.bottom = null;
    } else {
      this.top = this.top.prev;
    }
    this.length--;
  }
  push(value) {
    const stackNode = new StackNode(this.top, value);
    this.top = stackNode;
    if (this.length === 0) this.bottom = stackNode;
    this.length++;
  }
  peek() {
    return this.top.value;
  }

  list() {
    let currentItem = this.top;
    while (currentItem) {
      console.log(currentItem.value, "currentItem");
      currentItem = currentItem.prev;
    }
  }
}

const myStack = new Stack();
myStack.push("is the best");
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.push("lololo");
console.log(myStack.peek());

// myStack.list();
