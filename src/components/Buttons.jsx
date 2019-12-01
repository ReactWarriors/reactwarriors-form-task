import React from "react";

const Buttons = props => {
  const { page, previousPage, nextPage, reset } = props;

  return (
    <div className="button_container">
      {page < 4 ? (
        <div className="d-flex justify-content-center">
          <button
            onClick={previousPage}
            disabled={page === 1}
            className="btn btn-light mr-4"
          >
            Previous
          </button>
          <button onClick={nextPage} className="btn btn-secondary">
            Next
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <button onClick={reset} className="btn btn-primary mt-4">
            Reset
          </button>
        </div>
      )}
    </div>
  );
};
export default Buttons;
