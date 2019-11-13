import React from "react";

class TabsContainer extends React.Component {
  constructor(props) {
    const { page } = props;
    super();
    this.state = {
      page: this.page,
      className: "tabs_container_item"
    };
  }
  render() {
    return (
      <div className="tabs_container">
        <div className={this.state.className}>{this.state.page}</div>
        <div className={this.state.className}>{this.state.page}</div>
        <div className={this.state.className}>{this.state.page}</div>
        <div className={this.state.className}>{this.state.page}</div>
      </div>
    );
  }
}

export default TabsContainer;
