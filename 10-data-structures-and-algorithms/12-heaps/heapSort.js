// assuming our `MaxHeap` from the previous section

function heapSort(array) {
  // Step 1: build the heap
  let heap = new MaxHeap();
  array.forEach((num) => heap.insert(num));

  // Step 2: constructed the sorted array
  let sorted = [];
  while (heap.array.length > 1) {
    sorted.push(heap.deleteMax());
  }

  return sorted;
}
