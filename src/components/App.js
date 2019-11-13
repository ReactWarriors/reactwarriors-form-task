import React from "react";
import Field from "./Field";
import TabsContainer from "./TabsContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
  }

  nextPage = event => {
    event.preventDefault();
    if (this.state.page < 4) {
      this.setState({
        page: this.state.page + 1
      });
    }
  };

  previousPage = event => {
    event.preventDefault();
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      });
    }
  };

  reset = event => {
    event.preventDefault();
    this.setState({
      page: 1
    });
  };

  render() {
    return (
      <div className="container">
        <form className="form form_one">
          <TabsContainer />
          <Field />
          {this.state.page < 4 ? (
            <div className="button_container">
              <button onClick={this.previousPage}>Previous</button>
              <button onClick={this.nextPage}>Next</button>
            </div>
          ) : (
            <div className="button_container">
              <button onClick={this.previousPage}>Reset</button>
            </div>
          )}

          <div className="page">{`page:  ${this.state.page}`}</div>
        </form>
      </div>
    );
  }
}

export default App;
