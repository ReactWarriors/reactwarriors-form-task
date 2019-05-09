import React from "react";

const Radio = props => {
	const {
		id,
		labelText,
		name,
		selectedValue,
		options,
		onChange
	} = props;
	const getRadioOptions = () => {
		return options.map(item => (
			<div key={item.value}>
				<input
					id={item.id}
					type="radio"
					className="form-check-input"
					name={name}
					value={item.value}
					defaultChecked={item.value === selectedValue}
					onChange={onChange}
				/>
				<label htmlFor={item.id} className="form-check-label">{item.labelText}</label>
			</div>
		));
	};
  return (
	<div className="form-group">
	  <div className="form-check" id={id}>
	  <div>{labelText}</div>
	  {getRadioOptions()}
	  </div>
	</div>
  );
};

export default Radio;
