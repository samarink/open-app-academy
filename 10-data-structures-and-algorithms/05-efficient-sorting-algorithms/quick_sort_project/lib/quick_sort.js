function quickSort(array) {
  if (array.length <= 1) return array;

  let pivot = array.shift();
  let left = array.filter(n => n < pivot);
  let right = array.filter(n => n >= pivot);

  let leftSorted = quickSort(left);
  let rightSorted = quickSort(right);

  return [ ...leftSorted, pivot, ...rightSorted ];
}

module.exports = {
  quickSort,
};

