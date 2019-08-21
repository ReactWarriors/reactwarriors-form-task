import React from 'react'

import FirstStep from '../FirstStep/FirstStep'
import SecondStep from '../SecondStep/SecondStep'
import ThirdStep from '../ThirdStep/ThirdStep'
import FourthStep from '../FourthStep/FourthStep'
import StepsBox from '../StepsBox/StepsBox'

import FormControl from '../FormControl/FormControl'

export default class App extends React.Component {
  state = {
    currentStep: 1,
    values: {
      firstName: '',
      lastName: '',
      password: '',
      repeatPassword: '',
      gender: 'male',
      email: '',
      phone: '',
      country: '',
      city: '',
      avatar: '',
    },
    errors: {
      firstName: false,
      lastName: false,
      password: false,
      repeatPassword: false,
      gender: false,
      email: false,
      phone: false,
      country: false,
      city: false,
      avatar: false,
    },
  }

  onChange = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState(state => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }))
  }

  onSubmit = e => {
    e.preventDefault()
    const errors = {}
    const values = this.state.values
    switch (this.state.currentStep) {
      case 1:
        if (values.firstName.length < 5)
          errors.firstName = 'Must be 5 characters or more'
        if (values.lastName < 5)
          errors.lastName = 'Must be 5 characters or more'
        if (values.password < 6)
          errors.password = 'Must be 6 characters or more'
        if (values.password !== values.repeatPassword || values.password === '')
          errors.repeatPassword = 'Must be equal password'
        break
      case 2:
        if (!values.email.includes('@') || values.email.length < 8)
          errors.email = 'Required'
        if (!values.phone.includes('+') || values.email.length < 9)
          errors.phone = 'Required'
        if (values.country === '') errors.country = 'No selected country'
        if (values.city === '') errors.city = 'No selected city'
        break
      case 3:
        if (values.avatar === '') errors.avatar = 'Choose your avatar please'
        break
      default:
    }
    Object.keys(errors).length > 0
      ? this.setState({ errors: errors })
      : this.setState({ errors: {}, currentStep: this.state.currentStep + 1 })
  }

  onResetClick = () => {
    this.setState({
      currentStep: 1,
      values: {
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        gender: 'male',
        email: '',
        phone: '',
        country: '',
        city: '',
        avatar: '',
      },
    })
  }

  onPreviousStep = e => {
    e.preventDefault()
    this.setState({
      currentStep: this.state.currentStep - 1,
    })
  }

  render() {
    return (
      <div className="form-container card">
        <form className="form card-body">
          <StepsBox currentStep={this.state.currentStep} />
          {this.state.currentStep === 1 ? (
            <FirstStep
              errors={this.state.errors}
              onChange={this.onChange}
              values={this.state.values}
            />
          ) : null}
          {this.state.currentStep === 2 ? (
            <SecondStep
              errors={this.state.errors}
              onChange={this.onChange}
              values={this.state.values}
            />
          ) : null}

          {this.state.currentStep === 3 ? (
            <ThirdStep
              values={this.state.values}
              onChange={this.onChange}
              errors={this.state.errors}
            />
          ) : null}

          {this.state.currentStep === 4 ? (
            <FourthStep
              values={this.state.values}
              onResetClick={this.onResetClick}
            />
          ) : null}

          {this.state.currentStep < 4 ? (
            <FormControl
              currentStep={this.state.currentStep}
              onPreviousStep={this.onPreviousStep}
              onClickSubmit={this.onSubmit}
            />
          ) : null}
        </form>
      </div>
    )
  }
}
