export default function Stack() {
  var list = [];

  return Object.freeze({
    add,
    remove,
    peek,
    length,
    isEmpty,
    clear,
    toArray,
    toString,
  });

  function add(data) {
    list.push(data);
  }

  function remove() {
    return list.pop();
  }

  function peek() {
    return list[list.length - 1];
  }

  function length() {
    return list.length;
  }

  function isEmpty() {
    return length() === 0;
  }

  function clear() {
    list = [];
  }

  function toArray() {
    return list.slice();
  }

  function toString() {
    return list.toString();
  }
}
