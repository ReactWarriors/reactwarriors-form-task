import React from "react";

const Buttons = props => {
  const { page, previousPage, nextPage, reset } = props;

  return (
    <div className="button_container">
      {page < 4 ? (
        <div className="button_container">
          <button onClick={previousPage} disabled={page === 1}>
            Previous
          </button>
          <button onClick={nextPage}>Next</button>
        </div>
      ) : (
        <div className="button_container">
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
};
export default Buttons;
