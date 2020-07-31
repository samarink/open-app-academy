function swap(array, idx1, idx2) {
  const temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
  return array;
}

function bubbleSort(array) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
  }

  return array;
}

module.exports = {
  bubbleSort,
  swap,
};

