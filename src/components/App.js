import React from "react";
import Field from "./Field";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
  }

  onClick = event => {
    event.preventDefault();
    console.log("click");
  };

  nextPage = event => {
    this.setState({
      page: this.state.page + 1
    });
  };

  render() {
    return (
      <div className="container">
        <form className="form form_one">
          <div className="tabs_container">
            <div className="tabs_container_item">1</div>
            <div className="tabs_container_item">2</div>
            <div className="tabs_container_item">3</div>
            <div className="tabs_container_item">4</div>
          </div>
          <Field />
          <div className="button_container">
            <button onClick={this.onClick}>Previous</button>
            <button onClick={this.nextPage}>Next</button>
          </div>
          <div className="page">{`page:  ${this.state.page}`}</div>
        </form>
      </div>
    );
  }
}

export default App;
