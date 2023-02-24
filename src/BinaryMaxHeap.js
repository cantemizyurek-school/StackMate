import BinaryHeap from "./BinaryHeap.js";

export default function BinaryMaxHeap(List, scoreFunction = baseScoreFunction) {
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
    return b - a;
  }
}
