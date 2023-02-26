import Queue from "./Queue.js";
import BinaryMinHeap from "./BinaryMinHeap.js";

export default function Graph() {
  var nodes = new Map();

  return Object.freeze({
    addVertex,
    addEdge,
    removeEdge,
    removeVertex,
    getEdge,
    getVertex,
    changeEdgeWeight,
    changeVertexData,
    traverseDepthFirst,
    traverseBreadthFirst,
    depthFirstSearch,
    dijkstra,
  });

  function Node(data) {
    var node = {
      data: data,
      edges: [],
    };
    return node;
  }

  function Edge(node1, node2, weight, directed) {
    var edge = {
      node1: node1,
      node2: node2,
      weight: weight,
      directed: directed,
    };
    return edge;
  }

  function addVertex(data, name) {
    var node = Node(data);

    if (name) {
      nodes.set(name, node);
    } else {
      nodes.set(data, node);
    }
  }

  function addEdge(node1, node2, weight = 0.0001, directed = false) {
    var edge = Edge(node1, node2, weight, directed);

    node1.edges.push(edge);
    if (!directed) {
      node2.edges.push(edge);
    }

    return edge;
  }

  function getVertex(data) {
    return nodes.get(data);
  }

  function removeEdge(edge) {
    var node1 = edge.node1;
    var node2 = edge.node2;

    node1.edges = node1.edges.filter((e) => e !== edge);
    node2.edges = node2.edges.filter((e) => e !== edge);
  }

  function removeVertex(node) {
    nodes.delete(node.data);
    node.edges.forEach((edge) => removeEdge(edge));

    return node;
  }

  function getEdge(node1, node2) {
    return node1.edges.find(
      (edge) => edge.node1 === node2 || edge.node2 === node2
    );
  }

  function changeEdgeWeight(edge, weight) {
    edge.weight = weight;
  }

  function changeVertexData(node, data) {
    node.data = data;
  }

  function traverseDepthFirst(node, callback) {
    callback(node);
    node.edges.forEach((edge) => {
      var neighbor = edge.node1 === node ? edge.node2 : edge.node1;
      traverseDepthFirst(neighbor, callback);
    });
  }

  function depthFirstSearch(node1, node2) {
    var path = [];
    var visited = new Set();

    function traverse(node) {
      if (node === node2) {
        return true;
      }

      visited.add(node);
      path.push(node);

      for (var edge of node.edges) {
        var neighbor = edge.node1 === node ? edge.node2 : edge.node1;
        if (!visited.has(neighbor)) {
          var found = traverse(neighbor);
          if (found) {
            return true;
          }
        }
      }

      path.pop();
    }

    traverse(node1);

    return path;
  }

  function traverseBreadthFirst(node, callback) {
    var queue = Queue();
    queue.enqueue(node);

    while (!queue.isEmpty()) {
      var node = queue.dequeue();
      callback(node);
      node.edges.forEach((edge) => {
        var neighbor = edge.node1 === node ? edge.node2 : edge.node1;
        queue.enqueue(neighbor);
      });
    }
  }

  function dijkstra(
    node1,
    node2,
    weightFn = (edge) => edge.weight,
    compareFunction = (a, b) => a - b
  ) {
    var visited = new Set();
    var heap = BinaryMinHeap([], (a) => a.distance);
    var distances = new Map();
    var previous = new Map();

    distances.set(node1, 0);
    heap.add({ node: node1, distance: 0 });

    while (!heap.isEmpty()) {
      var node = heap.get().node;
      visited.add(node);

      if (node === node2) {
        break;
      }

      node.edges.forEach((edge) => {
        var neighbor = edge.node1 === node ? edge.node2 : edge.node1;
        var distance = distances.get(node) + weightFn(edge);

        var isNewDistance = compareFunction(distance, distances.get(neighbor));

        if (!distances.has(neighbor) || isNewDistance < 0) {
          distances.set(neighbor, distance);
          previous.set(neighbor, node);
          heap.add({ node: neighbor, distance: distance });
        }
      });
    }

    var path = [];
    var node = node2;
    while (node) {
      path.push(node.data);
      node = previous.get(node);
    }

    return path.reverse();
  }
}
