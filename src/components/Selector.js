import React from "react";

const Selector = props => {
	const {
		id,
		labelText,
		name,
		value,
		options,
		onChange
	} = props;
	const getOptionsItems = () => {
		return options.map((item, i) => (
			<option key={item.id} value={item.id}>
				{item.name}
			</option>
		));
	};
	return (
		<div className="form-group">
			<label htmlFor={id}>{ labelText }</label>
			<select
				className="form-control"
				id={id}
				name={name}
				value={value}
				onChange={onChange}
			>
			<option key="0" value="0" disabled>Select {name}</option>
			{getOptionsItems()}
			</select>
		</div>
	);
};

export default Selector;
