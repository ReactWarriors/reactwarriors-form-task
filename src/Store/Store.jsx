import { observable, action, computed } from "mobx";
import { validator } from "../components/Validation/Validation";
import cities from "../data/cities";

export default class Store {
  @observable
  page = 1;

  @observable
  currentStep = 0;

  @observable
  values = {
    firstname: "",
    lastname: "",
    password: "",
    repeatPassword: "",
    gender: "female",
    country: "",
    city: "",
    mobile: "",
    avatar: "",
    email: ""
  };

  @observable
  errors = {
    firstname: false,
    lastname: false,
    password: false,
    repeatPassword: false,
    mobile: false,
    email: false,
    avatar: false,
    country: false,
    city: false
  };

  @observable
  steps = [
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
  ];

  @action
  onChange = event => {
    console.log(event);
    this.values[event.target.name] = event.target.value;
  };

  @action
  resetPages = () => {
    this.page = 1;
    this.currentStep = 0;
    this.values = {
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
    };
    this.errors = {
      firstname: false,
      lastname: false,
      password: false,
      repeatPassword: false,
      mobile: false,
      email: false,
      avatar: false,
      country: false,
      city: false
    };
    this.steps = [
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
    ];
  };

  @action
  nextPage = () => {
    const errors = validator(this.page, this.values);
    if (Object.keys(errors).length > 0) {
      this.errors = errors;
    } else {
      const nextStep = this.currentStep + 1;
      this.steps[this.currentStep].isCompleted = true;
      this.steps[this.currentStep].isActive = false;
      this.steps[nextStep].isCompleted = false;
      this.steps[nextStep].isActive = true;
      this.page = this.page + 1;
      this.currentStep = nextStep;
    }
  };

  @action
  prevPage = () => {
    console.log(this.currentStep);
    const prevStep = this.currentStep - 1;
    this.steps[this.currentStep].isCompleted = false;
    this.steps[this.currentStep].isActive = false;
    this.steps[prevStep].isCompleted = false;
    this.steps[prevStep].isActive = true;
    this.page = this.page - 1;
    this.currentStep = prevStep;
  };

  @computed get getOptionsCities() {
    let selectedCities = [];
    for (let key in cities) {
      if (Number(cities[key].country) === Number(this.values.country)) {
        selectedCities.push({ id: key, name: cities[key].name });
      }
    }
    return selectedCities;
  }

  @action
  selectCountry = event => {
    this.values = { ...this.values, country: event.target.value };
  };

  @action
  selectCity = event => {
    this.values = { ...this.values, city: event.target.value };
  };

  @action
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
}
