class Store {
  constructor(rootReducer) {
    this.rootReducer = rootReducer;
    this.state = {};

    this.getState = this.getState.bind(this);
  }

  getState() {
    return Object.assign(this.state); // shallow copy
  }
}

const createStore = (...args) => new Store(...args);

const combineReducers = config => {
  return (prevState, action) => {
    const nextState = {};
    Object.keys(prevState).forEach(k => {
      nextState[k] = config[k](prevState[k], action);
    });

    return nextState;
  }
}
