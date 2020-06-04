// spread
Function.prototype.curry = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn(...args);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};

// apply
Function.prototype.curry1 = function (numArgs) {
  const args = [];
  const fn = this;

  function _curriedFn(arg) {
    args.push(arg);

    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
      return _curriedFn;
    }
  }

  return _curriedFn;
};

// arrow function
Function.prototype.curry2 = function (nArg) {
  const argArray = [];

  const _curriedFn = (arg) => {
    argArray.push(arg);

    if (argArray.length === nArg) {
      return this(...argArray);
    } else {
      return _curriedFn;
    }
  };

  return _curriedFn;
};
