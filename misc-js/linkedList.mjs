class LinkedListNode {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new LinkedListNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new LinkedListNode(value, null, this.tail);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head);
    this.head = newNode;
    this.head.next.prev = newNode;
    this.length++;
  }

  search(index) {
    let currentNode = this.head;
    let searchIndex = 0;
    let result;

    function checkValue() {
      if (searchIndex === index) {
        result = currentNode.value;
        return true;
      }
      searchIndex++;
      currentNode = currentNode.next;
    }

    do {
      checkValue();
    } while (currentNode.next && !result);
    {
      checkValue();
    }

    return result;
  }

  insertAt(index, value) {
    let currentNode = this.head;
    let isFinished = false;

    if (index === 0) {
      this.prepend(value);
      return;
    }

    let searchIndex = 0;
    while (currentNode.next && !isFinished && searchIndex <= this.length) {
      if (searchIndex > this.length) {
        this.append(value);
        break;
      }

      if (searchIndex === index) {
        const newNode = new LinkedListNode(
          value,
          currentNode.next,
          currentNode
        );
        currentNode.next = newNode;
        isFinished = true;
      }
      currentNode = currentNode.next;
      searchIndex++;
    }
  }

  delete(value) {
    let prevNode = this.head;
    let currentNode = this.head;
    let isDeleted = false;
    while (currentNode?.next && !isDeleted) {
      if (currentNode.value === value) {
        prevNode.next = currentNode.next;
        currentNode.next.prev = prevNode;
        isDeleted = true;
        this.length--;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  list() {
    const values = [];
    let currentNode = this.head;

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values, "values");
  }

  reverse() {
    let currentNode = this.tail;
    let index = 0;
    while (currentNode) {
      const oldNext = currentNode.next;
      const oldPrev = currentNode.prev;
      currentNode.next = oldPrev;
      currentNode.prev = oldNext;
      currentNode = oldPrev;
      index++;
    }
    const oldHead = this.head;
    this.head = this.tail;
    this.tail = oldHead;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.prepend(0);
myLinkedList.list();
myLinkedList.reverse();
myLinkedList.list();
