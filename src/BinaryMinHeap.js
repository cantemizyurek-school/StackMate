import BinaryHeap from "./BinaryHeap.js";

export default function BinaryMinHeap(List, scoreFunction = baseScoreFunction) {
  var heap = BinaryHeap(List, scoreFunction, baseCompareFunction);

  return {
    ...heap,
  };

  function baseScoreFunction(node) {
    return node;
  }

  function baseCompareFunction(a, b) {
    return a - b;
  }
}
