import BinaryHeap from "./BinaryHeap.js";

export default function BinaryMaxHeap(List, scoreFunction) {
  if (!scoreFunction) {
    scoreFunction = function baseScoreFunction(node) {
      return node;
    };
  }

  var heap = BinaryHeap(List, scoreFunction, baseCompareFunction);

  return Object.freeze({
    ...heap,
  });

  function baseCompareFunction(a, b) {
    return b - a;
  }
}
