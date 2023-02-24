export default function DoublyLinkedList(list) {
  var head = null;
  var tail = null;
  var length = 0;

  if (list) {
    list.forEach(() => push(item));
  }

  return {
    push,
    pop,
    shift,
    unshift,
    get,
    set,
    insert,
    remove,
    reverse,
    slice,
    concat,
    toArray,
    toString,
    length: () => length,
    head: () => head,
    tail: () => tail,
  };

  function Node(data) {
    var node = {
      data: data,
      next: null,
      prev: null,
    };
    return node;
  }

  function push(data) {
    var node = Node(data);
    if (!head) {
      head = node;
      tail = node;
    } else {
      tail.next = node;
      node.prev = tail;
      tail = node;
    }
    length++;
  }

  function pop() {
    if (!head) {
      return null;
    }
    var current = tail;
    if (current.prev) {
      current.prev.next = null;
      tail = current.prev;
    } else {
      head = null;
      tail = null;
    }
    length--;
    return current.data;
  }

  function shift() {
    if (!head) {
      return null;
    }
    var current = head;
    head = current.next;
    if (!head) {
      tail = null;
    } else {
      head.prev = null;
    }
    length--;
    return current.data;
  }

  function unshift(data) {
    var node = Node(data);
    if (!head) {
      head = node;
      tail = node;
    } else {
      head.prev = node;
      node.next = head;
      head = node;
    }
    length++;
  }

  function getNode(index) {
    index = getNegativeIndex(index);
    if (index >= length) {
      return null;
    }

    if (index < length / 2) {
      var current = head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
    } else {
      var current = tail;
      for (let i = length - 1; i > index; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  function get(index) {
    var node = getNode(index);
    return node ? node.data : null;
  }

  function set(index, data) {
    var node = getNode(index);
    if (node) {
      node.data = data;
      return true;
    }
    return false;
  }

  function insert(index, data) {
    if (index > length) {
      return false;
    }

    index = getNegativeIndex(index);

    if (index === 0) {
      unshift(data);
      return true;
    }

    if (index === length) {
      push(data);
      return true;
    }

    var node = Node(data);
    var previous = getNode(index - 1);
    var next = previous.next;
    previous.next = node;
    node.prev = previous;
    node.next = next;
    next.prev = node;
    length++;
    return true;
  }

  function remove(index) {
    if (index >= length) {
      return null;
    }

    index = getNegativeIndex(index);

    if (index === 0) {
      return shift();
    }

    if (index === length - 1) {
      return pop();
    }

    var current = getNode(index);
    var previous = current.prev;
    var next = current.next;
    previous.next = next;
    next.prev = previous;
    length--;

    current.prev = null;
    current.next = null;

    return current.data;
  }

  function indexOf(data) {
    var current = head;
    for (let i = 0; i < length; i++) {
      if (current.data === data) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  function reverse() {
    var current = head;
    var previous = null;
    var next = null;
    while (current) {
      next = current.next;
      current.next = previous;
      current.prev = next;
      previous = current;
      current = next;
    }
    tail = head;
    head = previous;
  }

  function slice(start, end) {
    var list = new DoublyLinkedList();
    var current = getNode(start);
    for (let i = start; i < end; i++) {
      list.push(current.data);
      current = current.next;
    }
    return list;
  }

  function concat(list) {
    if (Array.isArray(list)) {
      list.forEach((item) => push(item));
      return true;
    }

    if (list.length() === 0) {
      return false;
    }

    var current = list.head;
    while (current) {
      push(current.data);
      current = current.next;
    }

    return true;
  }

  function toArray() {
    var array = [];
    var current = head;
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  function toString() {
    var string = "";
    var current = head;
    while (current) {
      string += current.data + " ";
      current = current.next;
    }
    return string;
  }

  function getNegativeIndex(index) {
    if (index < 0) {
      index = length + index;
    }
    return index;
  }
}
