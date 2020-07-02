import { connect } from 'react-redux';
import StepList from './step_list';
// Actions
import { stepsByTodoId } from '../../reducers/selectors';
import { receiveStep, requestSteps } from '../../actions/step_actions';

const mapStateToProps = (state, { todo_id }) => ({
  steps: stepsByTodoId(state, todo_id),
  todo_id
});

const mapDispatchToProps = (dispatch, { todo_id }) => ({
  receiveStep: step => dispatch(receiveStep(step)),
  requestSteps: todo_id => dispatch(requestSteps(todo_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepList);
