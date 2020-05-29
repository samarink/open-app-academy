function range(start, end) {
  if (start === end) {
    return [];
  }

  return [start].concat(range(start + 1, end));

  // let r = range(start, end - 1);
  // r.push(end - 1);
  // return r;
}

function sumRec(nums) {
  if (nums.length === 0) {
    return 0;
  }

  return nums[0] + sumRec(nums.slice(1));

  // let lastNum = numbers[numbers.length - 1];
  // return sumRec(numbers.slice(0, numbers.length - 1)) + lastNum;
}

function exp1(base, exp) {
  if (exp === 0) { return 1; }
  return base * exp1(base, exp - 1);
}

function exp2(base, exp) {
  if (exp === 0) { return 1; }
  if (exp === 1) { return base; }

  if (exp % 2 === 0) {
    let subAnswer = exp2(base, exp / 2);
    return subAnswer * subAnswer;
  } else {
    let subAnswer = exp2(base, ((exp - 1) / 2));
    return subAnswer * subAnswer * base;
  }
}

function fibonaci(n) {
  if (n < 3) {
    return [1, 2].slice(0, n);
  }

  let fibs = fibonaci(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
}

function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  }

  return arr.map(el => {
    return deepDup(el);
  });
}

function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }

  const probeIdx = Math.floor(numbers.length / 2);
  const probe = numbers[probeIdx];

  if (target === probe) {
    return probeIdx;
  } else if (target < probe) {
    const left = numbers.slice(0, probeIdx);
    return bsearch(left, target);
  } else {
    const right = numbers.slice(probeIdx + 1);
    const subProblem = bsearch(right, target);

    return subProblem === -1 ? -1 : subProblem + (probeIdx + 1);
  }
}

function merge(left, right) {
  const merged = [];

  while (left.length > 0 && right.length > 0) {
    let nextItem = (left[0] < right[0]) ? left.shift() : right.shift();
    merged.push(nextItem);
  }

  return merged.concat(left, right);
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    const middle = Math.floor(array.length / 2);

    const left = mergeSort(array.slice(0, middle));
    const right = mergeSort(array.slice(middle));

    return merge(left, right);
  }
}

function subsets(array) {
  if (array.length === 0) {
    return [[]];
  }

  const first = array[0];
  const withoutFirst = subsets(array.slice(1));
  const withFirst = withoutFirst.map(sub => [first].concat(sub) );

  return withoutFirst.concat(withFirst);
}
