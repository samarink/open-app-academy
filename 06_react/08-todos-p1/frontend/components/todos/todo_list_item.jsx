import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTodo = this.deleteTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  deleteTodo(e) {
    e.preventDefault();
    const { removeTodo, todo } = this.props;

    removeTodo(todo);
  }

  toggleTodo(e) {
    e.preventDefault();
    const toggledTodo = Object.assign(
      {},
      this.props.todo,
      { done: !this.props.todo.done }
    );

     this.props.receiveTodo(toggledTodo);
  }

  render() {
    const { todo } = this.props;
    const { title, done } = todo;

    return (
      <li className='todo-list-item'>
        <div className='todo-header'>
          <h3>{title}</h3>
          <button
            className='delete-todo-button'
            onClick={this.deleteTodo}>
            &times;
          </button>
          <button
            className={done ? 'done' : 'undone'}
            onClick={this.toggleTodo}>
            {done ? 'Undo' : 'Done'}
          </button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
