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

  function remove(data) {
    if (!root) {
      return;
    }

    var current = root;
    var parent = null;

    while (current) {
      if (data === current.data) {
        break;
      }

      if (data < current.data) {
        parent = current;
        current = current.left;
      } else if (data > current.data) {
        parent = current;
        current = current.right;
      }
    }

    if (!current) {
      return;
    }

    if (!current.left && !current.right) {
      if (!parent) {
        root = null;
      } else if (parent.left === current) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (current.left && current.right) {
      var successor = current.right;
      var successorParent = current;

      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      if (successorParent.left === successor) {
        successorParent.left = successor.right;
      } else {
        successorParent.right = successor.right;
      }

      current.data = successor.data;
    } else {
      var child = current.left ? current.left : current.right;

      if (!parent) {
        root = child;
      } else if (parent.left === current) {
        parent.left = child;
      } else {
        parent.right = child;
      }
    }

    length--;
  }
}
