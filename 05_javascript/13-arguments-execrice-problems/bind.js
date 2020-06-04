// arguments keyword
Function.prototype.myBindArgs = function (ctx) {
  const fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  return function _boundFn() {
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  };
};

// rest operator
Function.prototype.myBindRest = function (ctx, ...bindArgs) {
  return (...callArgs) => this.apply(ctx, bindArgs.concat(callArgs));
};

