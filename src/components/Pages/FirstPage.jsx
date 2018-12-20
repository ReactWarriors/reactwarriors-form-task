import React from "react";
import Field from "./Field";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => ({
  values: formStore.values,
  errors: formStore.errors,
  onChange: formStore.onChange
}))
@observer
class FirstPage extends React.Component {
  render() {
    const { onChange, errors, values } = this.props;
    return (
      <div>
        <Field
          values={values.firstname}
          id="firstname"
          labelText="Firstname"
          type="text"
          placeholder="Enter firstname"
          name="firstname"
          onChange={onChange}
          errors={errors.firstname}
        />
        <Field
          values={values.lastname}
          id="lastname"
          labelText="Lastname"
          type="text"
          placeholder="Enter lastname"
          name="lastname"
          onChange={onChange}
          errors={errors.lastname}
        />
        <Field
          values={values.password}
          type="password"
          labelText="Password"
          id="password"
          placeholder="Enter password"
          name="password"
          onChange={onChange}
          errors={errors.password}
        />
        <Field
          type="password"
          className="form-control"
          labelText="Repeat password"
          id="repeatPassword"
          placeholder="Repeat password"
          name="repeatPassword"
          onChange={onChange}
          errors={errors.repeatPassword}
        />
        <fieldset className="form-group">
          <div>Gender</div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onChange={onChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default FirstPage;
