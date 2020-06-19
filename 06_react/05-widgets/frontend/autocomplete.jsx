import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputVal: '' }

    this.handleInput = this.handleInput.bind(this);
    this.selectName = this.selectName.bind(this);
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  matches() {
    let matches = [];
    if (this.state.inputVal === '') {
      return this.props.names;
    }

    matches = this.props.names.filter(name => {
      return (name.toLowerCase().startsWith(this.state.inputVal.toLowerCase()));
    });

    if (matches.length === 0) {
      matches.push('No matches');
    }

    return matches;
  }

  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li onClick={this.selectName} key={i}>{result}</li>
      );
    });

    return (
      <div>
        <h1>Autocomplete</h1>
        <div className='auto'>
          <input
            onChange={this.handleInput}
            value={this.state.inputVal}
            placeholder='Search...'/>
          <ul>
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }
}

export default Autocomplete;
