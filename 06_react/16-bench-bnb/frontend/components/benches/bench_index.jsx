import React from 'react';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const { benches } = this.props;
    const benchItems = benches.map(bench => (
      <BenchIndexItem key={bench.id} bench={bench} />
    ));

    return (
      <ul className='benche-items'>
        {benchItems}
      </ul>
    )
  }
}

export default BenchIndex;
