import React from "react";

export default class FormControl extends React.Component {
  render() {
      const {currentStep, onPreviousStep, onClickSubmit} = this.props
    return (
      <div className="d-flex justify-content-center">
        <button
          type="button"
          className="btn btn-light mr-3"
          disabled={currentStep === 1}
          onClick={onPreviousStep}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary"
          type="submit"
          onClick={onClickSubmit}
        >
          Next
        </button>
      </div>
    );
  }
}
