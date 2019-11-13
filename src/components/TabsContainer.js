import React from "react";

class TabsContainer extends React.Component {
  render() {
    return (
      <div className="tabs_container">
        <div
          className={this.props.page === 1 ? "active" : "tabs_container_item"}
        >
          1
        </div>
        <div
          className={this.props.page === 2 ? "active" : "tabs_container_item"}
        >
          2
        </div>
        <div
          className={this.props.page === 3 ? "active" : "tabs_container_item"}
        >
          3
        </div>
        <div
          className={this.props.page === 4 ? "active" : "tabs_container_item"}
        >
          4
        </div>
      </div>
    );
  }
}

export default TabsContainer;
