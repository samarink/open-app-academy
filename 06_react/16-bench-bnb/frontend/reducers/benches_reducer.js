import { RECEIVE_BENCHES } from '../actions/bench_actions';

const benchesReducer = (state = {}, acton) => {
  Object.freeze(state);

  switch(acton.type) {
    case RECEIVE_BENCHES:
      return acton.benches;
    default:
      return state;
  }
}

export default benchesReducer;
