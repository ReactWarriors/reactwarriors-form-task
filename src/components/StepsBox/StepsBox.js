import React from "react";
// eslint-disable-next-line
import StepsBox from "../StepsBox/StepsBox.css";

export default class App extends React.Component {
  render() {
    const { currentStep } = this.props;
    const activeStyleNumber = "step__number mb-2 active_number";
    const completeStyleNumber = "step__number mb-2 complete_number";
    const basicStyleNumber = "step__number mb-2";
    return (
      <div className="steps d-flex mb-2 justify-content-between">
        <div className="step">
          <div
            className={
              currentStep === 1
                ? activeStyleNumber
                : currentStep > 1
                ? completeStyleNumber
                : basicStyleNumber
            }
          >
            1
          </div>
          <p className="step_name">Basic</p>
          <span
            className={
              currentStep !== 1 ? "step_line step_line_active" : "step_line"
            }
          />
        </div>
        <div className="step">
          <div
            className={
              currentStep === 2
                ? activeStyleNumber
                : currentStep > 2
                ? completeStyleNumber
                : basicStyleNumber
            }
          >
            2
          </div>
          <p className="step_name">Contacts</p>
          <span
            className={
              currentStep !== 2 && currentStep > 2
                ? "step_line step_line_active"
                : "step_line"
            }
          />
        </div>
        <div className="step">
          <div
            className={
              currentStep === 3
                ? activeStyleNumber
                : currentStep > 3
                ? completeStyleNumber
                : basicStyleNumber
            }
          >
            3
          </div>
          <p className="step_name">Avatar</p>
          <span
            className={
              currentStep !== 3 && currentStep > 3
                ? "step_line step_line_active"
                : "step_line"
            }
          />
        </div>
        <div className="step">
          <div
            className={
              currentStep === 4
                ? activeStyleNumber
                : currentStep > 4
                ? completeStyleNumber
                : basicStyleNumber
            }
          >
            4
          </div>
          <p className="step_name">Finish</p>
        </div>
      </div>
    );
  }
}
