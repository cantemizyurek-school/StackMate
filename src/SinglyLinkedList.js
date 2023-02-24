export default function SinglyLinkedList(list) {
  var head = null;
  var tail = null;
  var length = 0;

  if (list) {
    list.forEach(function (item) {
      push(item);
    });
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
    length: function () {
      return length;
    },
    head: function () {
      return head;
    },
    tail: function () {
      return tail;
    },
  };

  function Node(data) {
    var node = {
      data: data,
      next: null,
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
      tail = node;
    }
    length++;
  }

  function pop() {
    if (!head) {
      return null;
    }
    var current = head;
    var previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    if (previous) {
      previous.next = null;
      tail = previous;
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
      node.next = head;
      head = node;
    }
    length++;
  }

  function getNode(index) {
    if (index >= length) {
      return null;
    }

    index = getNegativeIndex(index);

    var current = head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  function get(index) {
    var node = getNode(index);
    if (node) {
      return node.data;
    }
    return null;
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
    node.next = previous.next;
    previous.next = node;
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

    var previous = getNode(index - 1);
    var current = previous.next;
    previous.next = current.next;
    length--;
    return current.data;
  }

  function reverse() {
    var current = head;
    var previous = null;
    var next = null;

    while (current) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    tail = head;
    head = previous;
  }

  function slice(start = 0, end = length) {
    start = getNegativeIndex(start);
    end = getNegativeIndex(end);

    if (start > end) {
      return null;
    }

    if (start === end) {
      return null;
    }

    var list = SingleyLinkedList();
    var current = getNode(start);
    for (let i = start; i < end; i++) {
      list.push(current.data);
      current = current.next;
    }
    return list;
  }

  function concat(list) {
    if (Array.isArray(list)) {
      for (let i = 0; i < list.length; i++) {
        push(list[i]);
      }

      return true;
    }

    if (list.length() === 0) {
      return false;
    }

    var current = list.head();
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
