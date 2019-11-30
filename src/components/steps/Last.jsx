import React from "react";
import countries from "../../data/countries";
import cities from "../../data/cities";

class Last extends React.Component {
  getCountry = countries => {
    let stateCountry = this.props.value.country;
    let country = countries.find(country => country.id == stateCountry);
    return country.name;
  };
  getCity = cities => {
    let stateCity = this.props.value.city;
    for (let city in cities) {
      if (city == stateCity) {
        return cities[city].name;
      }
    }
  };
  render() {
    const { value } = this.props;
    return (
      <div className="form_container">
        <div>
          <img src={value.avatar} width={70} height={100} alt={"img"} />
        </div>
        <div>{`${value.firstname} ${value.lastname}`}</div>
        <div>{`Email: ${value.email}`}</div>
        <div>{`Mobile: ${value.mobile}`}</div>
        <div>{`Location: ${this.getCountry(countries)}, ${this.getCity(
          cities
        )}`}</div>
      </div>
    );
  }
}

export default Last;
