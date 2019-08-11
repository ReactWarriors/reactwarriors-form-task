import React from "react";
// eslint-disable-next-line
import StepsBox from "../StepsBox/StepsBox.css"

export default class App extends React.Component {
    
    render() {
        let {currentStep} = this.props
        return (
            <div className="steps d-flex mb-2 justify-content-between">
                <div className="step">
                    <div className={currentStep > 1 ? "step__number mb-2 complete_number" : "step__number mb-2"} >1</div>
                    <p className="step_name">Basic</p>
                </div>
                <div className="step">
                    <div className={currentStep > 2 ? "step__number mb-2 complete_number" : "step__number mb-2"}>2</div>
                    <p className="step_name">Contacts</p>
                </div>
                <div className="step">
                    <div className={currentStep > 3 ? "step__number mb-2 complete_number" : "step__number mb-2"}>3</div>
                    <p className="step_name">Avatar</p>
                </div>
                <div className="step">
                    <div className={currentStep > 4 ? "step__number mb-2 complete_number" : "step__number mb-2"}>4</div>
                    <p className="step_name">Finish</p>
                </div>
            </div>
        )
    }
}