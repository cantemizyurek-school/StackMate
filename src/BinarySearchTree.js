import Queue from "./Queue.js";

export default function BinarySearchTree() {
  var root = null;
  var length = 0;

  return Object.freeze({
    insert,
    remove,
    contains,
    length: () => length,
    toArray,
    toString,
    root: () => root,
    breadthFirstSearch,
    depthFirstSearch,
  });

  function Node(data) {
    var node = {
      data: data,
      left: null,
      right: null,
    };
    return node;
  }

  function insert(data) {
    var node = Node(data);

    if (!root) {
      root = node;
      length++;
      return;
    }

    var current = root;
    while (current) {
      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          length++;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          length++;
          return;
        }
        current = current.right;
      }
    }

    length++;
  }

  function breadthFirstSearch(callback) {
    var queue = Queue();
    var current = root;

    while (current) {
      callback(current);
      if (current.left) {
        queue.enqueue(current.left);
      }
      if (current.right) {
        queue.enqueue(current.right);
      }
      current = queue.dequeue();
    }
  }

  function depthFirstSearch(callback, order = "post") {
    var current = root;

    function helper(node) {
      if (!node) {
        return;
      }

      if (order.toLocaleLowerCase() === "pre") {
        callback(node);
      }

      helper(node.left);

      if (order.toLocaleLowerCase() === "in") {
        callback(node);
      }

      helper(node.right);

      if (order.toLocaleLowerCase() === "post") {
        callback(node);
      }
    }

    helper(current);
  }

  function contains(data) {
    var contains = false;

    breadthFirstSearch((node) => {
      if (node.data === data) {
        contains = true;
      }
    });

    return contains;
  }

  function toArray() {
    var array = [];
    depthFirstSearch((node) => array.push(node.data), "in");
    return array;
  }

  function toString() {
    var string = "";
    depthFirstSearch((node) => (string += node.data + " "), "in");
    return string;
  }

  function remove(data) {}
}

//test
var bst = BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);

bst.remove(3);
