const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    rl.question('enter a num: ', function(numStr) {
      const numInt = parseInt(numStr);

      sum += numInt;
      console.log('sum so far ' + sum);

      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  rl.close();
});

