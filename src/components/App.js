import React from "react";
import Field from "./Field";
import TabsContainer from "./TabsContainer";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";

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

  getOptionsItems = items => {
    return items.map(item => (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    ));
  };

  render() {
    return (
      <div className="container">
        <form className="form">
          <TabsContainer page={this.state.page} />
          {this.state.page === 1 ? (
            <Page1 />
          ) : this.state.page === 2 ? (
            <Page2 getOptionsItems={this.getOptionsItems} />
          ) : this.state.page === 3 ? (
            <Page3 />
          ) : this.state.page === 4 ? (
            <Page4 />
          ) : (
            ""
          )}
          {this.state.page < 4 ? (
            <div className="button_container">
              <button onClick={this.previousPage}>Previous</button>
              <button onClick={this.nextPage}>Next</button>
            </div>
          ) : (
            <div className="button_container">
              <button onClick={this.reset}>Reset</button>
            </div>
          )}

          <div className="page">{`page:  ${this.state.page}`}</div>
        </form>
      </div>
    );
  }
}

export default App;
