import React from "react";
import Field from "../Field/Field";
export default class SecondStep extends React.Component {
  render() {
    const {
      email,
      errorEmail,
      phone,
      errorPhone,
      onChange,
      country,
      errorCountry,
      city,
      errorCity,
      getOptionsItems,
      selectedDefault,
      getCitiesOptions
    } = this.props;
    return (
      <div>
        <p>Second Step</p>
        <Field
          id="email"
          labelText="Email"
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          error={errorEmail}
          onChange={onChange}
        />
        <Field
          id="phone"
          labelText="Phone"
          type="phone"
          placeholder="Enter your phone number"
          name="phone"
          value={phone}
          error={errorPhone}
          onChange={onChange}
        />

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            className={
              errorCountry ? "form-control is-invalid" : "form-control"
            }
            id="country"
            name="country"
            value={country}
            onChange={onChange}
            error={errorCountry}
          >
            <option value={selectedDefault}>Select country:</option>
            {getOptionsItems()}
          </select>
          {errorCountry ? (
            <div className="invalid-feedback">{errorCountry}</div>
          ) : null}
        </div>

        <div className="form-group">
          <label htmlFor="city">City</label>
          <select
            className={errorCity ? "form-control is-invalid" : "form-control"}
            id="city"
            name="city"
            value={city}
            onChange={onChange}
            error={errorCity}
          >
            <option value={selectedDefault}>Select city:</option>
            {getCitiesOptions()}
          </select>
          {errorCity ? (
            <div className="invalid-feedback">{errorCity}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
