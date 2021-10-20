/**
 * Node
 * 說明：儲存資料，並由 next 串連到下一個 Node
 * 參考：https://www.geeksforgeeks.org/data-structures/linked-list/
 */
class Node {
  constructor(item) {
    this.next = null;
    this.item = item;
  }
}

/**
 * Stack
 * 說明：使用 Linked List 資料結構，資料由多個獨立 Node 串連而成。
 * 參考：https://www.geeksforgeeks.org/data-structures/linked-list/
 */
class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * 添加新元素
   * @param {*} item 加入 Stack 中的元素
   */
  push(item) {
    const newNode = new Node(item);

    if (this.length > 0) {
      this.tail.next = newNode; // 串連 Node
    } else {
      this.head = newNode; // 設定第一個 Node
    }

    this.tail = newNode; // 設定最後一個 Node
    this.length++;
  }

  /**
   * 移除元素並返回被移除的元素
   * @returns {Node} 移除的 Node
   */
  pop() {
    // Stack 已經空了，直接回傳 null
    if (!this.length) {
      return null;
    }

    let currentNode = this.head;
    let newLastNode = this.head;

    while (currentNode.next) {
      newLastNode = currentNode;
      currentNode = currentNode.next;
    }

    newLastNode.next = null; // 取消串連最後一個 Node
    this.tail = newLastNode; // 設定最後一個 Node
    this.length--;

    // Stack 空了，將第一個 Node 和最後一個 Node 清空
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }

    return currentNode;
  }

  /**
   * 返回所有元素數量
   * @returns {number} 當前 Stack 的元素數量
   */
  size() {
    return this.length;
  }
}

const stack = new Stack();
stack.push(1); // Node(1)
stack.push(2); // Node(1) -> Node(2)
stack.push(3); // Node(1) -> Node(2) -> Node(3)

console.log(stack.head); // Node(1)
console.log(stack.tail); // Node(3)
console.log(stack.length); // 3

const poppedItem = stack.pop();
stack.pop();

console.log(poppedItem); // Node(3)
console.log(stack.head); // Node(1)
console.log(stack.tail); // Node(1)
console.log(stack.length); // 1
