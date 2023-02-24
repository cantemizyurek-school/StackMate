export default function BinaryHeap(
  List,
  scoreFunction = baseScoreFunction,
  compareFunction = baseCompareFunction
) {
  var heap = [];

  if (List) {
    for (var i = 0; i < List.length; i++) {
      add(List[i]);
    }
  }

  return {
    add,
    get,
    size,
    peek,
    isEmpty,
  };

  function baseScoreFunction(node) {
    return node;
  }

  function baseCompareFunction(a, b) {
    return a - b;
  }

  function add(node) {
    heap.push(node);

    var idx = heap.length - 1;
    var parentIdx = Math.floor((idx - 1) / 2);

    while (
      idx > 0 &&
      compareFunction(
        scoreFunction(heap[parentIdx]),
        scoreFunction(heap[idx])
      ) > 0
    ) {
      swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = Math.floor((idx - 1) / 2);
    }

    return idx;
  }

  function get() {
    var node = heap[0];
    swap(0, heap.length - 1);
    heap.pop();

    var idx = 0;
    var leftIdx = 2 * idx + 1;
    var rightIdx = 2 * idx + 2;

    while (
      (leftIdx < heap.length &&
        compareFunction(
          scoreFunction(heap[idx]),
          scoreFunction(heap[leftIdx])
        ) > 0) ||
      (rightIdx < heap.length &&
        compareFunction(
          scoreFunction(heap[idx]),
          scoreFunction(heap[rightIdx])
        ) > 0)
    ) {
      if (
        rightIdx < heap.length &&
        compareFunction(
          scoreFunction(heap[leftIdx]),
          scoreFunction(heap[rightIdx])
        ) > 0
      ) {
        swap(idx, rightIdx);
        idx = rightIdx;
      } else {
        swap(idx, leftIdx);
        idx = leftIdx;
      }

      leftIdx = 2 * idx + 1;
      rightIdx = 2 * idx + 2;
    }

    return node;
  }

  function size() {
    return heap.length;
  }

  function peek() {
    return heap[0];
  }

  function isEmpty() {
    return heap.length === 0;
  }

  function swap(i, j) {
    var temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
  }
}
