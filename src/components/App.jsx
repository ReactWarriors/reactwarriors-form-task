import React from "react";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FinishPage from "./Pages/FinishPage";
import StepButtons from "./Steps/StepButtons";
import cities from "../data/cities";
import { validator } from "./Validation/Validation";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      currentStep: 0,
      values: {
        country: null,
        city: null,
        selectedCities: [],
        firstname: "",
        lastname: "",
        password: "",
        email: "",
        mobile: "",
        avatar: "",
        gender: "male"
      },
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        mobile: false,
        email: false,
        avatar: false,
        country: false,
        city: false
      },

      steps: [
        {
          id: 0,
          isActive: true,
          isCompleted: false,
          name: "Basic"
        },
        {
          id: 1,
          isActive: false,
          isCompleted: false,
          name: "Contacts"
        },
        {
          id: 2,
          isActive: false,
          isCompleted: false,
          name: "Avatar"
        },
        {
          id: 3,
          isActive: false,
          isCompleted: false,
          name: "Finish"
        }
      ]
    };
  }

  onChange = event => {
    const newValues = {
      ...this.state.values,
      [event.target.name]: event.target.value
    };
    const newErrors = {
      ...this.state.errors,
      [event.target.name]: false
    };
    this.setState(prevState => ({
      ...prevState,
      values: newValues,
      errors: newErrors
    }));
  };

  onChangeAvatar = event => {
    const reader = new FileReader();
    reader.onload = event => {
      this.onChange({
        target: {
          name: "avatar",
          value: event.target.result
        }
      });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  resetPages = () => {
    this.setState({
      page: 1,
      currentStep: 0,
      values: {
        country: null,
        city: null,
        selectedCities: [],
        firstname: "",
        lastname: "",
        password: "",
        email: "",
        mobile: "",
        avatar: "",
        gender: "male"
      },
      errors: {
        firstname: false,
        lastname: false,
        password: false,
        repeatPassword: false,
        mobile: false,
        email: false,
        avatar: false,
        country: false,
        city: false
      },

      steps: [
        {
          id: 0,
          isActive: true,
          isCompleted: false,
          name: "Basic"
        },
        {
          id: 1,
          isActive: false,
          isCompleted: false,
          name: "Contacts"
        },
        {
          id: 2,
          isActive: false,
          isCompleted: false,
          name: "Avatar"
        },
        {
          id: 3,
          isActive: false,
          isCompleted: false,
          name: "Finish"
        }
      ]
    });
  };

  nextPage = () => {
    const { steps, currentStep } = this.state;
    const errors = validator(this.state.page, this.state.values);
    if (Object.keys(errors).length > 0) {
      this.setState(prevState => ({
        errors: {
          ...prevState.errors,
          ...errors
        }
      }));
    } else {
      const nextStep = currentStep + 1;
      steps[currentStep].isCompleted = true;
      steps[currentStep].isActive = false;
      steps[nextStep].isCompleted = false;
      steps[nextStep].isActive = true;
      this.setState(({ page, currentStep }) => ({
        page: page + 1,
        currentStep: nextStep
      }));
    }
  };

  prevPage = () => {
    const { steps, currentStep } = this.state;
    console.log(currentStep);
    const prevStep = currentStep - 1;
    steps[currentStep].isCompleted = false;
    steps[currentStep].isActive = false;
    steps[prevStep].isCompleted = false;
    steps[prevStep].isActive = true;
    return this.setState(({ page, currentStep }) => ({
      page: page - 1,
      currentStep: prevStep
    }));
  };

  selectCountry = event => {
    this.setState(
      {
        values: { ...this.state.values, country: event.target.value }
      },
      () => {
        this.selectTowns();
      }
    );
  };

  selectTowns = () => {
    let selectedCities = [];
    for (let key in cities) {
      if (cities[key].country == this.state.values.country) {
        console.log("cities", cities[key]);
        selectedCities.push({ id: key, name: cities[key].name });
      }
    }
    this.setState({
      values: { ...this.state.values, selectedCities: selectedCities }
    });
    console.log(selectedCities);
  };

  selectCity = event => {
    this.setState({
      values: { ...this.state.values, city: event.target.value }
    });
  };
  render() {
    const { page, steps, values, errors } = this.state;
    return (
      <div className="form-container card">
        <StepButtons steps={steps} />
        <form className="form card-body">
          {page === 1 && (
            <FirstPage
              values={values}
              onChange={this.onChange}
              errors={errors}
            />
          )}
          {page === 2 && (
            <SecondPage
              values={values}
              onChange={this.onChange}
              errors={errors}
              selectCountry={this.selectCountry}
              selectTowns={this.selectTowns}
              selectCity={this.selectCity}
            />
          )}
          {page === 3 && (
            <ThirdPage
              values={values}
              onChange={this.onChange}
              onChangeAvatar={this.onChangeAvatar}
              errors={errors}
            />
          )}
          {page === 4 && (
            <FinishPage
              values={values}
              onChange={this.onChange}
              errors={errors}
              resetPages={this.resetPages}
            />
          )}
        </form>

        <div>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.prevPage}
            disabled={page === 1}
          >
            Назад
          </button>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={this.nextPage}
            disabled={page === 4}
          >
            Вперед
          </button>
        </div>
      </div>
    );
  }
}

export default App;
