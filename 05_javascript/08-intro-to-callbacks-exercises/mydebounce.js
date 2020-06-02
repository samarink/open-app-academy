Function.prototype.myDebounce = function(interval) {
  // declare a variable outside of the returned function
  let timeout;
  // return a function that takes an arbitrary number of arguments
  return (...args) => {
    // declare a function that sets timeout to null and invokes this with args
    const fnCall = () => {
      timeout = null;
      this(...args);
    }
    // each time this function is called, it will clear the previous timeout
    // and create a new one that invokes fnCall after the interval has passed
    // since the timeout is reset every time the function is invoked,
    // fnCall will only be called once the interval has passed without any new
    // invocations
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, interval);
  }
}

