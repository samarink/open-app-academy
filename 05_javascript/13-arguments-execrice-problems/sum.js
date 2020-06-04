// arguments keyword
function sumArgs () {
  args = Array.from(arguments);

  return args.reduce((acc, val) => acc + val);
}

console.log(sumArgs(1,2,3));

// rest operator
function sumRest (...nums) {
  return nums.reduce((acc, val) => acc + val);
}

console.log(sumRest(1,2,3));

