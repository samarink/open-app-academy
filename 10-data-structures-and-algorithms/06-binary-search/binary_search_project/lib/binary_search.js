function binarySearch(array, target) {
  if (!array.length) {
    return false;
  }

  let middleIdx = Math.floor(Array.length / 2);
  let leftSide = array.slice(0, middleIdx);
  let rightSide = array.slice(middleIdx + 1);

  if (array[middleIdx] > target) {
    return binarySearch(leftSide, target);
  } else if (array[middleIdx] < target) {
    return binarySearch(rightSide, target);
  } else {
    return true;
  }
}

function binarySearchIndex(array, target, lo = 0, hi = array.length - 1) {
  if (lo === hi) {
    return -1;
  }

  let middleIdx = Math.floor((lo + hi )/ 2);

  if (array[middleIdx] > target) {
    return binarySearchIndex(array, target, lo, middleIdx);
  } else if (array[middleIdx] < target) {
    return binarySearchIndex(array, target, middleIdx + 1, hi);
  } else {
    return middleIdx;
  }
}

module.exports = {
  binarySearch,
  binarySearchIndex,
};

