import SinglyLinkedList from "./SinglyLinkedList.js";

export default function Queue() {
  var list = SinglyLinkedList();

  return Object.freeze({
    enqueue,
    dequeue,
    peek,
    length,
    isEmpty,
    clear,
    toArray,
    toString,
  });

  function enqueue(data) {
    list.push(data);
  }

  function dequeue() {
    return list.shift();
  }

  function peek() {
    return list.head();
  }

  function length() {
    return list.length();
  }

  function isEmpty() {
    return length() === 0;
  }

  function clear() {
    list = new SinglyLinkedList();
  }

  function toArray() {
    return list.toArray();
  }

  function toString() {
    return list.toString();
  }
}
