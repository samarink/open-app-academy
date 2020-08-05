// swap the elements at indices i and j of array
function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

// sift-down the node at index i until max heap property is restored
// n represents the size of the heap
function heapify(array, n, i) {
  let leftIdx = 2 * i + 1;
  let rightIdx = 2 * i + 2;

  let leftVal = array[leftIdx];
  let rightVal = array[rightIdx];

  if (leftIdx >= n) leftVal = -Infinity;
  if (rightIdx >= n) rightVal = -Infinity;

  if (array[i] > leftVal && array[i] > rightVal) return;

  let swapIdx;
  if (leftVal < rightVal) {
    swapIdx = rightIdx;
  } else {
    swapIdx = leftIdx;
  }
  swap(array, i, swapIdx);
  heapify(array, n, swapIdx);
}

function heapSort(array) {
  // heapify the tree from the bottom up
  for (let i = array.length - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }
  // the entire array is now a heap

  // until the heap is empty, continue to "delete max"
  for (let endOfHeap = array.length - 1; endOfHeap >= 0; endOfHeap--) {
    // swap the root of the heap with the last element of the heap,
    // this effecively shrinks the heap by one and grows the sorted array by one
    swap(array, endOfHeap, 0);

    // sift down the new root, but not past the end of the heap
    heapify(array, endOfHeap, 0);
  }
  return array;
}
