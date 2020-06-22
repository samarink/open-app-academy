import React from 'react';

class TodoListItem extends React.Component {
  render() {
    const { todo } = this.props;
    const { title } = todo;

    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <h3>{title}</h3>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
