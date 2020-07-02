import React from 'react';
// Components
import StepListItemContainer from './step_list_item_container';
import StepForm from './step_form';

class StepList extends React.Component {

  componentDidMount() {
    const { requestSteps, todo_id } = this.props;
    requestSteps(todo_id);
  }

  render() {
    const { steps, todo_id, receiveStep, createStep } = this.props;

    const stepItems = steps.map(step => (
      <StepListItemContainer
        key={step.id}
        step={step} />
    ));

    return (
      <div>
        <ul className="step-list">
          { stepItems }
        </ul>
        <StepForm
          todo_id={ todo_id }
          receiveStep={ receiveStep }
          createStep={ createStep }/>
      </div>
    );
  }
}

export default StepList;
