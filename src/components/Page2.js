import React from "react";
import Field from "./Field";
import countries from "../data/countries";

const Page2 = props => {
  const { getOptionsItems } = props;
  return (
    <div className="form-group">
      <Field
        id="email"
        labelText="Email"
        type="email"
        placeholder="email"
        name="email"
      />

      <Field
        id="mobile"
        labelText="Mobile"
        type="tel"
        placeholder="Enter Mobile"
        name="mobile"
      />

      <label htmlFor="country">Country</label>
      <select className="form-control" id="country" name="country">
        <option>Пункт 1</option>
        <option>Пункт 2</option>
      </select>

      <label htmlFor="city">City</label>
      <select className="form-control" id="city" name="city">
        <option>Пункт 1</option>
        <option>Пункт 2</option>
      </select>
    </div>
  );
};

export default Page2;
