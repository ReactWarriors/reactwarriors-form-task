import React from "react";

class Avatar extends React.Component {
  render() {
    const { value, onChangeAvatar, errors } = this.props;
    return (
      <div className="form-group">
        {value.avatar === "" ? (
          <div className="photoPlaceholder">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPDxIOEBAODw8PEBAPEhAODQ8NEQ8PFREWFhURFRMYHSggGBolGxMTITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABQQBAwIH/8QANRABAAEBBAcHAwIHAQAAAAAAAAECAwQRIQUSMUFRYXEigZGhscHRMjPhQvBScoKSorLxI//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9RAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB52ttTTtmI5b/AAB6Cfa6Qn9MYc5z8mWu2qq21TPfl4AszJihALwhRMxsmY6S9aLzXGyqe+cfUFgYLG/7q474+G6J3g6AAAAAAAAAAAAAAAAAADBpC3/RH9XwDl5vu6j+74YpkAAAAAAAGuwvurTFOrjhv1sN/RkAb40jxo/yx9myztIqjWjZKI1XC21atWdlXlO4FMAAAAAAAAAAAAAAAHKpwjHhGKJXVjMzO2ZxVr5OFnV0w8ZwSAAAAAAAAAAAAAWbCvWpirjHnvejLo2rsYcKp9pagAAAAAAAAAAAAAAZ7/8AbnrHqlKmkPtz1j1SwAAAAAAAAAAAAb9FzlVHOJ9fhuT9GTnV0hQAAAAAAAAAAAAAABnv8f8AnPWPVKWbejWpmnjHnuRgAAAAAAAAAAAAbNGfVV0j1UWLRlOVU8ZiPD/raAAAAAAAAAAAAAAD4tbSKYxmcISrzMTXM05xOfy2aT+mP5vZOABwHQAAAAAB3049z5B12iiapwjOZccBbsbPUpinh5y+2e41TNnGO7GGgAAAAAAAAAAAAAAGbSFONGPCYn290tbtKNaJp4xMIkwA+f35PpwAAByPy6AfgAHPnB397gAMR2inGYjfMxHiCtcqcLOnnn4zi93IjDLhk6AAAAAAAAAAAAAAAk36jVrnnnHft88VYBCHpeacK6o5zPdObzAAAAAAAAAe9yoxtI5Zz3PGiMZiOMxC4AAAAAAAAAAAAAAAAAADDpKyyiuN2U9NzAt104xMTsmMEWqnCZidsTgDgAAAAAAANWj7LGrW3U+qm8bpZ6tERvnOesvYAAAAAAAAAAAAAAAAAABKv9OFpPOIn29lVM0jPb6Ux7gygAAAAAERjkPqy+qOseoLYAAAAAAAAAAAAAAAAAAACPeqsa6p54eGXsoXm9RRGETjVw4dUoAAAAAAAicM+AAuROMYxsnN1Pud7iI1atm6eHKVCJAAAAAAAAAAAAAAAGa2vtNOztTy2eLBbXiqvbOXCMoBvtr7TTlHanls8WK1vddW/COFOXm8AAAAAAAAAAAB92VtVT9MzHLbHg+AG6z0h/FT30/DVZXiirZMY8JylHcBeEeyvNdOycY4TnDbY3+mcquzPHbANY5E45xnHJ0AAAAAGG9X3Ds0bd9XwD3vF6poy21cI9062vFVe2cuEZQ8gAAAAAAAAAAAAAAAAAAAAHpY21VGye7dPc3WF+pnKrsz5fhNAXRJu15mjnTw+FWiqJiJjZOYOgA+bX6Z6T6IboAAAAAAAAAAAAAAAAAAAAAAAAAq3D7dPf8A7SANAAP/2Q=="
              alt="img"
            />
          </div>
        ) : (
          <div className="photoPlaceholder">
            <img src={value.avatar} className="photoImg" alt="img" />
          </div>
        )}

        <input
          type="file"
          className="form-control-file avatar"
          id="avatar"
          name="avatar"
          onChange={onChangeAvatar}
        />
        {errors.avatar ? <div className="error">{errors.avatar}</div> : null}
      </div>
    );
  }
}

export default Avatar;
