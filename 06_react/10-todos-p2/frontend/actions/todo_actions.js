import * as TodoAPIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TODO_ERROR = 'TODO_ERROR';

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos,
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo,
});

export const removeTodo = todo => ({
  type: REMOVE_TODO,
  todo,
});

export const todoError = error => ({
  type: TODO_ERROR,
  error,
});

export const fetchTodos = () => dispatch => (
  TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const createTodo = todo => dispatch => (
  TodoAPIUtil.createTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const updateTodo = todo => dispatch => (
  TodoAPIUtil.updateTodo(todo)
    .then(
      todo => dispatch(receiveTodo(todo)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);
