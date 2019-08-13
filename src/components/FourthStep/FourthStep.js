import React from "react";

export default class FourthStep extends React.Component {
  render() {
    const {
      avatar,
      firstName,
      lastName,
      email,
      phone,
      country,
      city,
      onResetClick
    } = this.props;
    return (
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-4">
            <img src={avatar} alt="UserAvatar" style={{ width: "100%" }} />
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4>{firstName + lastName}</h4>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <p>
              <strong>Email: </strong>
              {email}
            </p>
            <p>
              <strong>Phone number: </strong> {phone}
            </p>
            <p>
              <strong>Country:</strong> {country}, {city}
            </p>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <button type="button" class="btn btn-primary" onClick={onResetClick}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
