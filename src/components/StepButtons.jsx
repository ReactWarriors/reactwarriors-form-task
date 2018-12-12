import React from "react";

const Button = props => {
  const class_name = props.class_name;
  return (
    <button type="button" className="btn btn-outline-info mr-4">
      1
    </button>
  );
};

export default class StepButtons extends React.Component {
  getClassName = step => {
    let value = "btn mr-4";
    if (step.isActive) {
      value += " btn-outline-primary";
    } else if (step.isCompleted) {
      value += " btn-outline-success";
    } else {
      value += " btn-outline-dark";
    }
    return value;
  };

  render() {
    const { currentStep, steps } = this.props;
    return (
      <div className="d-flex justify-content-center mb-4">
        {steps.map(step => (
          <button
            key={step.id}
            type="button"
            className={this.getClassName(step)}
          >
            {step.id + 1}
          </button>
        ))}
      </div>
    );
  }
}
