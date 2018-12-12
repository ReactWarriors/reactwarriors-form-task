import React from "react";
import Field from "./Field";
export default class FirstPage extends React.Component {
  render() {
    const { onChange, errors } = this.props;
    return (
      <div>
        <Field
          id="firstname"
          labelText="Firstname"
          type="text"
          placeholder="Enter firstname"
          name="firstname"
          onChange={onChange}
          errors={errors.firstname}
        />
        <Field
          id="lastname"
          labelText="Lastname"
          type="text"
          placeholder="Enter lastname"
          name="lastname"
          onChange={onChange}
          errors={errors.lastname}
        />
        <Field
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
        />
      </div>
    );
  }
}
