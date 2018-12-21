import React from "react";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FinishPage from "./Pages/FinishPage";
import StepButtons from "./Steps/StepButtons";
import { inject, observer } from "mobx-react";
import Buttons from "./Buttons/Buttons";

@inject(({ formStore }) => {
  return {
    page: formStore.page
  };
})
@observer
class App extends React.Component {
  render() {
    const { page } = this.props;
    return (
      <div className="form-container card">
        <StepButtons />
        <form className="form card-body">
          {page === 1 && <FirstPage />}
          {page === 2 && <SecondPage />}
          {page === 3 && <ThirdPage />}
          {page === 4 && <FinishPage />}
        </form>
        <Buttons />
      </div>
    );
  }
}

export default App;
