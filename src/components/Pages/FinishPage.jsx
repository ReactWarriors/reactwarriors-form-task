import React from "react";

export default class FinishPage extends React.Component {
  render() {
    const { onChange, values, country, city, resetPages } = this.props;
    return (
      <div class="card" style={{ width: "100%" }}>
        <img class="card-img-top" src={values.avatar} />
        <div class="card-body">
          <h5 class="card-title">
            {values.firstname} {values.lastname}
          </h5>
          <p class="card-text">Email: {values.email}</p>
          <p class="card-text">Mobile: {values.mobile}</p>
          <p class="card-text">
            Location: {values.country} {values.city}
          </p>
          <a href="#" class="btn btn-primary" onClick={resetPages}>
            Reset
          </a>
        </div>
      </div>
    );
  }
}
