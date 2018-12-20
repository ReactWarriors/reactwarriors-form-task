import React from "react";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  steps: formStore.steps
}))
@observer
class StepButtons extends React.Component {
  setClassName = step => {
    let classValue = "step";
    if (step.isActive) {
      classValue = `${classValue}  is-active`;
    }
    if (step.isCompleted) {
      classValue = `${classValue}  is-completed`;
    } else {
      classValue = classValue;
    }
    return classValue;
  };

  render() {
    const { steps } = this.props;
    return (
      <div className="steps mb-4 d-flex justify-content-around">
        {steps.map(step => (
          <div key={step.id} className={this.setClassName(step)}>
            <div className="step__marker">{step.id + 1}</div>
            <div className="step__title mt-1">{step.name}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default StepButtons;
