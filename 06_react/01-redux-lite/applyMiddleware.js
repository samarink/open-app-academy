const applyMiddleware = (...middlewares) => (store, cb) => action => {
  const middlewaresCopy = [...middlewares]; // to avoid mutating between calls

  const invokeNextMiddleware = (action) => {
    let nextMiddleware = middlewaresCopy.shift();
    if (!nextMiddleware) {
      return cb(action); // root reducer
    }

    return nextMiddleware(store)(invokeNextMiddleware)(action);
  }

  return invokeNextMiddleware(action);
}
