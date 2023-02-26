# Stacked Mate - A Data Structures Library

Stacked Mate is a lightweight and easy-to-use data structures library that provides several commonly used data structures for use in your projects.

## Installation

`npm install stackedmate`

## Data Structures

- Linked List - a data structure that consists of a sequence of nodes, each containing a reference to the next node in the sequence.
- Queue - First-In-First-Out (FIFO) structure that allows you to store and retrieve elements in a specific order.
- Stack - Last-In-First-Out (LIFO) structure that allows you to store and retrieve elements in a specific order.
- BinartHeap - a data structure that allows you to store elements in a specific order. The order is determined by the priority of the elements.
- Tree - a data structure that consists of a sequence of nodes, each containing a reference to the parent node and the child nodes.
- Binary Search Tree - a data structure that consists of a sequence of nodes, each containing a reference to the parent node and the child nodes. The nodes are ordered in a specific way.

## Features

### Singly Linked List And Doubly Linked List

- push - adds a node to the end of the list
- pop - removes a node from the end of the list
- shift - removes a node from the beginning of the list
- unshift - adds a node to the beginning of the list
- get - returns the node at the specified index
- set - sets the value of the node at the specified index
- insert - inserts a node at the specified index
- remove - removes a node at the specified index
- reverse - reverses the list
- clear - removes all nodes from the list
- indexOf - returns the index of the first node with the specified value
- slice - returns a new list containing the nodes between the specified indices
- concat - combines two lists into one list
- toArray - returns an array containing the values of the nodes in the list
- toString - returns a string containing the values of the nodes in the list
- length - returns the number of nodes in the list
- head - returns the first node in the list
- tail - returns the last node in the list

#### Example

```javascript
import { SinglyLinkedList } from "stack-mate";

const list = SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);

list.pop(); // 3

list.set(1, 4);

list.get(1); // 4

list.insert(1, 5);

list.remove(1); // 5
```

### Queue

- enqueue - adds an element to the end of the queue
- dequeue - removes an element from the beginning of the queue
- peek - returns the element at the beginning of the queue
- length - returns the number of elements in the queue
- isEmpty - returns true if the queue is empty, false otherwise
- clear - removes all elements from the queue
- toArray - returns an array containing the elements in the queue
- toString - returns a string containing the elements in the queue

#### Example

```javascript
import { Queue } from "stack-mate";

const queue = Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue(); // 1
queue.dequeue(); // 2
queue.dequeue(); // 3
```

### Stack

- add - adds an element to the top of the stack
- remove - removes an element from the top of the stack
- peek - returns the element at the top of the stack
- length - returns the number of elements in the stack
- isEmpty - returns true if the stack is empty, false otherwise
- clear - removes all elements from the stack
- toArray - returns an array containing the elements in the stack
- toString - returns a string containing the elements in the stack

#### Example

```javascript
import { Stack } from "stack-mate";

const stack = Stack();

stack.add(1);
stack.add(2);
stack.add(3);

stack.remove(); // 3
stack.remove(); // 2
stack.remove(); // 1
```

### Binary Heap

- add - adds an element to the heap
- remove - removes an element from the heap
- peek - returns the element at the top of the heap
- size - returns the number of elements in the heap
- isEmpty - returns true if the heap is empty, false otherwise
- clear - removes all elements from the heap
- merge - merges two heaps into one heap

#### Example

```javascript
import { BinaryHeap } from "stack-mate";

const heap = BinaryHeap(
  [7, 2, 4],
  (node) => node,
  (a, b) => a - b
);

heap.add(1);
heap.add(3);
heap.add(5);

heap.remove(); // 1
heap.remove(); // 2
heap.remove(); // 3
heap.remove(); // 4
heap.remove(); // 5
heap.remove(); // 7
```

### Tree

- getChildren - returns an array containing the child nodes of the specified node
- getParent - returns the parent node of the specified node
- getDepth - returns the depth of the specified node
- getRoot - returns the root node of the tree
- add - adds a node to the tree (parent node can be specified)
- remove - removes a node from the tree (child nodes are also removed)
- removeChildren - removes the child nodes of the specified node
- traverseBreadthFirst - traverses the tree in breadth-first order
- traverseDepthFirst - traverses the tree in depth-first order (pre-order, post-order)
- toArray - returns an array containing the values of the nodes in the tree
- toString - returns a string containing the values of the nodes in the tree
- length - returns the number of nodes in the tree

#### Example

```javascript
import { Tree } from "stack-mate";

const tree = Tree();

var node1 = tree.add(1);
var node2 = tree.add(2);

var node3 = tree.add(3, node2);
var node4 = tree.add(4, node2);

// 1
// 2
// 3 4
```

### Binary Search Tree

- add - adds a node to the tree
- remove - removes a node from the tree
- contains - returns true if the tree contains the specified node, false otherwise
- get - returns the node with the specified value
- getMin - returns the node with the minimum value
- getMax - returns the node with the maximum value
- getDepth - returns the depth of the specified node
- root - returns the root node of the tree
- traverseBreadthFirst - traverses the tree in breadth-first order
- traverseDepthFirst - traverses the tree in depth-first order (pre-order, post-order)
- toArray - returns an array containing the values of the nodes in the tree
- toString - returns a string containing the values of the nodes in the tree

#### Example

```javascript
import { BinarySearchTree } from "stack-mate";

const tree = BinarySearchTree();

tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);

tree.remove(2);

tree.contains(2); // false
tree.contains(3); // true

tree.get(3); // 3

tree.getMin(); // 1
tree.getMax(); // 4

tree.getDepth(); // 2

tree.traverseBreadthFirst((node) => console.log(node.value));
// 1
// 3
// 4

tree.traverseDepthFirst((node) => console.log(node.value), "pre-order");
// 1
// 3
// 4

tree.traverseDepthFirst((node) => console.log(node.value), "post-order");
// 4
// 3
// 1
```

### Graph

- addVertex - adds a vertex to the graph
- addEdge - adds an edge to the graph
- removeVertex - removes a vertex from the graph
- removeEdge - removes an edge from the graph
- getVertex - returns the vertex with the specified value
- getEdge - returns the edge with the specified value
- traverseBreadthFirst - traverses the graph in breadth-first order
- traverseDepthFirst - traverses the graph in depth-first order
- depthFirstSearch - performs a depth-first search on the graph
- dijkstra - performs a Dijkstra's algorithm on the graph

#### Example

```javascript
import { Graph } from "stack-mate";

const graph = Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");
graph.addNode("F");

graph.addEdge(graph.getNode("A"), graph.getNode("B"), 7);
graph.addEdge(graph.getNode("A"), graph.getNode("C"), 9);
graph.addEdge(graph.getNode("A"), graph.getNode("F"), 14);
graph.addEdge(graph.getNode("B"), graph.getNode("C"), 10);
graph.addEdge(graph.getNode("B"), graph.getNode("D"), 15);
graph.addEdge(graph.getNode("C"), graph.getNode("D"), 11);
graph.addEdge(graph.getNode("C"), graph.getNode("F"), 2);
graph.addEdge(graph.getNode("D"), graph.getNode("E"), 6);
graph.addEdge(graph.getNode("E"), graph.getNode("F"), 9);

console.log(graph.dijkstra(graph.getNode("A"), graph.getNode("E"))); // [ 'A', 'C', 'F', 'E' ]
```
