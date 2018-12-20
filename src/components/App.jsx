import React from "react";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FinishPage from "./Pages/FinishPage";
import StepButtons from "./Steps/StepButtons";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => {
  return {
    page: formStore.page,
    nextPage: formStore.nextPage,
    prevPage: formStore.prevPage
  };
})
@observer
class App extends React.Component {
  render() {
    const { page, prevPage, nextPage } = this.props;
    return (
      <div className="form-container card">
        <StepButtons />
        <form className="form card-body">
          {page === 1 && <FirstPage />}
          {page === 2 && <SecondPage />}
          {page === 3 && <ThirdPage />}
          {page === 4 && <FinishPage />}
        </form>
        <div>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={prevPage}
            disabled={page === 1}
          >
            Назад
          </button>
          <button
            className="btn btn-lg btn-primary btn-block"
            onClick={nextPage}
            disabled={page === 4}
          >
            Вперед
          </button>
        </div>
      </div>
    );
  }
}

export default App;
