import React from 'react'
import countries from '../data/countries.js'
import cities from '../data/cities'
export default class FourthStep extends React.Component {
  render() {
    const { values, onResetClick } = this.props

    const findCountry = countries.find(item => {
      return Number(item.id) === Number(values.country)
    })

    return (
      <div className="container-fluid">
        <div className="row mb-4">
          <div className="col-4">
            <img
              src={values.avatar}
              alt="UserAvatar"
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-8 d-flex align-items-center">
            <h4>
              <p>
                First name:
                <span className="font-weight-light">{values.firstName}</span>
              </p>
              <p>
                Last name:
                <span className="font-weight-light">{values.lastName}</span>
              </p>
            </h4>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <p>
              <strong>Email: </strong>
              {values.email}
            </p>
            <p>
              <strong>Phone number: </strong> {values.phone}
            </p>
            <p>
              <strong>Country:</strong>
              {findCountry.name},{cities[values.city].name}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onResetClick}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}
