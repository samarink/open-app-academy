import React from 'react';
import uniqueId from '../../util/id_generator';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <label>Title
          <input
            className='input'
            ref='title'
            value={this.state.title}
            placeholder='buy milk'
            onChange={this.update('title')}
            required/>
        </label>
        <label>
          <textarea
            className='input'
            ref='body'
            value={this.state.body}
            placeholder='2 packs on sale'
            onChange={this.update('body')}
            required>
          </textarea>
        </label>
        <button className='create-button'>Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;
