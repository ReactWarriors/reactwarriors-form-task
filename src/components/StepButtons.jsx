import React from "react";

export default class StepButtons extends React.Component {
  setClassName = step => {
    let classValue = "step";
    if (step.isActive) {
      classValue = `${classValue}  is-active`;
    }
    if (step.isCompleted) {
      classValue = `${classValue}  "is-completed"`;
    } else {
      classValue;
    }
    return classValue;
  };

  render() {
    const { steps } = this.props;
    return (
      <div className="steps">
        {steps.map(step => (
          <button
            key={step.id}
            type="button"
            className={this.setClassName(step)}
          >
            {step.id + 1}
          </button>
        ))}
      </div>
    );
  }
}
