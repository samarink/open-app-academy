import { connect } from 'react-redux';
import StepListItem from './step_list_item';
// Actions
import { receiveStep, removeStep, updateStep } from '../../actions/step_actions';

const mapDispatchToProps = (dispatch, { step }) => ({
  removeStep: () => dispatch(removeStep(step)),
  receiveStep: step => dispatch(receiveStep(step)),
  updateStep: updatedStep => dispatch(updateStep(updatedStep))
});

export default connect(
  null, // step prop is already passed in
  mapDispatchToProps
)(StepListItem);
