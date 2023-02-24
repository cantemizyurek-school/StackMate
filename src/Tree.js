import Queue from "./Queue.js";

export default function Tree() {
  var root = null;
  var length = 0;

  return Object.freeze({
    getChildren,
    getParent,
    getSiblings,
    getDepth,
    getRoot,
    add,
    remove,
    removeChildren,
    traverseBreadthFirst,
    traverseDepthFirst,
    toArray,
    toString,
  });

  function Node(data) {
    var node = {
      data: data,
      parent: null,
      children: [],
    };
    return node;
  }

  function getChildren(node) {
    return node.children;
  }

  function getParent(node) {
    if (!node.parent) {
      return null;
    }

    return node.parent;
  }

  function getSiblings(node) {
    if (!node.parent) {
      return null;
    }

    return node.parent.children.filter((child) => child !== node);
  }

  function getDepth(node) {
    if (!node.parent) {
      return 0;
    }

    return getDepth(node.parent) + 1;
  }

  function getRoot() {
    return root;
  }

  function add(data, parent = root) {
    length += 1;

    if (!parent) {
      root = Node(data);
      return root;
    }

    var node = Node(data);
    node.parent = parent;
    parent.children.push(node);
    return node;
  }

  function remove(node) {
    length -= 1;
    if (!node.parent) {
      root = null;
      return;
    }

    var parent = getParent(node);
    var siblings = getSiblings(node);

    parent.children = siblings;

    node.parent = null;
    removeChildren(node);

    return node;
  }

  function removeChildren(node) {
    if (!node.children.length) {
      return;
    }

    var children = getChildren(node);
    node.children.forEach((child) => {
      removeChildren(child);
      remove(child);
    });

    return children;
  }

  function traverseBreadthFirst(node, callback) {
    var queue = Queue();
    queue.enqueue(node);

    while (!queue.isEmpty()) {
      var current = queue.dequeue();
      callback(current);

      current.children.forEach((child) => {
        queue.enqueue(child);
      });
    }

    return node;
  }

  function traverseDepthFirst(node, callback, position = "pre") {
    if (!node) return;

    if (position.toLowerCase() === "pre") {
      callback(node);
    }

    node.children.forEach((child) => {
      traverseDepthFirst(child, callback, position);
    });

    if (position.toLocaleLowerCase() === "post") {
      callback(node);
    }

    return node;
  }

  function toArray(node, type = "breadth", position = "pre") {
    var array = [];

    if (type.toLowerCase() === "breadth") {
      traverseBreadthFirst(node, (node) => {
        array.push(node.data);
      });
    } else {
      traverseDepthFirst(
        node,
        (node) => {
          array.push(node.data);
        },
        position
      );
    }

    return array;
  }

  function toString(node) {
    var str = "";
    traverseDepthFirst(node, (node) => {
      str += node.data + " ";
    });
    return str.trim();
  }
}
