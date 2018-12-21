import React from "react";
import { inject, observer } from "mobx-react";

@inject(({ formStore }) => {
  return {
    page: formStore.page,
    nextPage: formStore.nextPage,
    prevPage: formStore.prevPage
  };
})
@observer
class Buttons extends React.Component {
  render() {
    const { page, nextPage, prevPage } = this.props;
    return (
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
    );
  }
}

export default Buttons;
