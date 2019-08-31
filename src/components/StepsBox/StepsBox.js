import React from 'react'
import classNames from 'classnames'
// eslint-disable-next-line
import StepsBox from '../StepsBox/StepsBox.css'

export default class App extends React.Component {
  render() {
    const { currentStep } = this.props
    return (
      <div className="steps d-flex mb-2 justify-content-between">
        {['Basic', 'contacts', 'Avatar', 'Finish'].map((stepName, index) => {
          return (
            <div
              className={classNames('number mb-5', {
                active: index + 1 === currentStep,
                complete: index + 1 < currentStep,
              })}
            >
              <div>{index + 1}</div>
              <p className="step_name"> {stepName} </p>
            </div>
          )
        })}
      </div>
    )
  }
}
