# Stacked Mate - A Data Structures Library

Stacked Mate is a lightweight and easy-to-use data structures library that provides several commonly used data structures for use in your projects.

## Installation

`npm install stack-mate`

## Data Structures

- Linked List - a data structure that consists of a sequence of nodes, each containing a reference to the next node in the sequence.

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

const list = new SinglyLinkedList();

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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue(); // 1
queue.dequeue(); // 2
queue.dequeue(); // 3
```
