import React from "react";

class TabsContainer extends React.Component {
  render() {
    return (
      <div className="tabs-container mb-4">
        <div className="tabs-container__tab">
          <div
            className={
              this.props.page === 1 ? "active" : "tabs-container__item"
            }
          >
            <p className="tabNumber">1</p>
          </div>
          <p className="tabs-container__title">Basic</p>
        </div>

        <div className="tabs-container__tab">
          <div
            className={
              this.props.page === 2 ? "active" : "tabs-container__item"
            }
          >
            <p className="tabNumber">2</p>
          </div>
          <p className="tabs-container__title">Contacts</p>
        </div>

        <div className="tabs-container__tab">
          <div
            className={
              this.props.page === 3 ? "active" : "tabs-container__item"
            }
          >
            <p className="tabNumber">3</p>
          </div>
          <p className="tabs-container__title">Avatar</p>
        </div>

        <div className="tabs-container__tab">
          <div
            className={
              this.props.page === 4 ? "active" : "tabs-container__item"
            }
          >
            <p className="tabNumber">4</p>
          </div>
          <p className="tabs-container__title">Finish</p>
        </div>
      </div>
    );
  }
}

export default TabsContainer;
