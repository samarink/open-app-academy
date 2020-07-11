import { connect } from 'react-redux';
import BenchIndex from './bench_index';
import { allBenches } from '../../reducers/selectors';
import { fetchBenches } from '../../actions/bench_actions';

const mapStateToProps = state => ({
  benches: allBenches(state)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);
