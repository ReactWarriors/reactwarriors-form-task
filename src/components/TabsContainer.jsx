import React from "react";

const stepsName = ["Basic", "Contacts", "Avatar", "Finish"];

class TabsContainer extends React.Component {
  render() {
    return (
      <div className="tabs-container mb-4">
        {stepsName.map((stepName, index) => (
          <div
            key={index}
            className={`tab  ${
              this.props.page >= index + 1 ? "is-complited-line" : ""
            }`}
          >
            <div
              className={`tab__item ${
                this.props.page === index + 1 ? "is-active" : ""
              } ${this.props.page > index + 1 ? "is-complited" : ""}`}
            >
              <p className="tab__number">{index + 1}</p>
            </div>
            <p className="tab__title">{stepName}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default TabsContainer;
