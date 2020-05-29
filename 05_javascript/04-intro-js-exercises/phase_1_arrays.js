// Array#uniq - returns a new array containing each individual
// element of the original array only once (creating all unique elements)

Array.prototype.uniq = function () {
  let uniqArray = [];

  for (let i = 0; i < this.length; i++) {
    if (uniqArray.indexOf(this[i]) === -1) {
      uniqArray.push(this[i]);
    }
  }

  return uniqArray;
}

// Alternative
Array.prototype.uniq = function () {
  let uniqs = []

  this.forEach(el => {
    if (!uniqs.includes(el)) {
      uniqs.push(el)
    }
  });

  return uniqs;
}

// Array#twoSum - returns an array of position pairs
// where the elements sum to zero
Array.prototype.twoSum = function () {
  let pairs = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        pairs.push([i,j]);
      }
    }
  }

  return pairs;
}

// Array#transpose - where we have a two-dimensional array
// representing a matrix. returns the transpose
Array.prototype.transpose = function () {
  const columns = Array.from(
    { length: this[0].length },
    () => Array.from({ length: this.length })
  );

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      columns[j][i] = this[i][j];
    }
  }

  return columns;
}
