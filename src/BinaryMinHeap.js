import BinaryHeap from "./BinaryHeap.js";

export default function BinaryMinHeap(List, scoreFunction = baseScoreFunction) {
  var heap = BinaryHeap(List, scoreFunction, baseCompareFunction);

  return {
    add: heap.add,
    get: heap.get,
    size: heap.size,
    peek: heap.peek,
    isEmpty: heap.isEmpty,
  };

  function baseScoreFunction(node) {
    return node;
  }

  function baseCompareFunction(a, b) {
    return a - b;
  }
}
