import React from "react";
import Field from "./Field";
import countries from "../data/countries";
import cities from "../data/cities";

const Page2 = props => {
  const { getOptionsItems, appState, getOptionsItemsCities } = props;
  return (
    <div className="form-group">
      <Field
        id="email"
        labelText="Email"
        type="email"
        placeholder="email"
        name="email"
        value={appState.email}
        onChange={props.onChange}
        appState={appState}
        error={appState.errors.email}
      />

      <Field
        id="mobile"
        labelText="Mobile"
        type="tel"
        placeholder="Enter Mobile"
        name="mobile"
        value={appState.mobile}
        onChange={props.onChange}
        appState={appState}
        error={appState.errors.mobile}
      />

      <label htmlFor="country">Country</label>
      <select
        className="form-control"
        id="country"
        name="country"
        value={appState.country}
        onChange={props.onChange}
      >
        {getOptionsItems(countries)}
      </select>
      {appState.errors.country ? (
        <div className="error">{appState.errors.country}</div>
      ) : null}
      <label htmlFor="city">City</label>
      <select
        className="form-control"
        id="city"
        name="city"
        value={appState.city}
        onChange={props.onChange}
      >
        {getOptionsItemsCities(cities)}
      </select>
    </div>
  );
};

export default Page2;
