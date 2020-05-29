Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function (callback) {
  const mapped = [];

  this.myEach(el => mapped.push(callback(el)) );

  return mapped;
}

Array.prototype.myReduce = function (callback, initialValue) {

  let arr = this;

  if (initialValue === undefined) {
    initialValue = arr[0];
    arr = this.slice(1);
  }

  let result = initialValue;

  arr.myEach(el => result = callback(result, el));

  return result;
}
