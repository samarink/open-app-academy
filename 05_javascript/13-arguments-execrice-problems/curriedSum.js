// curried sum
function sum(numArgs) {
  const numbers = [];

  function _sum(num) {
    numbers.push(num);

    if (numbers.length === numArgs) {
      return numbers.reduce((acc, val) => acc + val);
    } else {
      return _sum;
    }
  }

  return _sum;
}
