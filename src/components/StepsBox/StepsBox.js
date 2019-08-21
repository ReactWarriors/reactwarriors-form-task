import React from "react";
// eslint-disable-next-line
import StepsBox from "../StepsBox/StepsBox.css";

export default class App extends React.Component {
  render() {
    const { currentStep } = this.props;
    return (
      <div className="steps d-flex mb-2 justify-content-between">
        {["Basic", "contacts", "Avatar", "Finish"].map((stepName, index) => {
          return (
            <div
              className={`number mb-5  ${
                index + 1 === currentStep
                  ? "active"
                  : index + 1 < currentStep
                  ? "complete"
                  : ""
              } `}
            >
              <div>{index + 1}</div>
              <p className="step_name"> {stepName} </p>
            </div>
          );
        })}
      </div>
    );
  }
}
