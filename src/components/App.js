import React from "react";
import countries from "../data/countries";
import cities from "../data/cities";
import Field from "./Field";
import Check from "./Check";
import Radio from "./Radio";
import Selector from "./Selector";

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			activeStep: 0,
			username: "",
			userSurname: "",
			email: "",
			phone: "",
			password: "",
			repeatPassword: "",
			agreeConfidential: true,
			gender: "male",
			country: "0",
			city: "0",
			errors: {
				username: false,
				userSurname: false,
				email: false,
				phone: false,
				password: false,
				repeatPassword: false,
				agreeConfidential: false,
			},
			countries: countries,
			cities: [],
			genders: [{
					id: "male",
					value: "male",
					labelText: "Male"
				},
				{
					id: "female",
					value: "female",
					labelText: "Female"
				},
			],
			avatar: "",
		};
	}
	componentDidMount() {
		this.init();
	};
	init = () => {
		let self = this;
		let stepLinks = document.querySelectorAll('.step__list li');
		let steps = document.querySelectorAll('.step');
		stepLinks.forEach((item, i) => { if (i === self.state.activeStep) {item.classList.add('active')} else {item.classList.remove('active')}});
		steps.forEach((item, i) => { if (i === self.state.activeStep) {item.classList.add('active')} else {item.classList.remove('active')}});
	};
	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onChangeCountry = event => {
		this.setState({
			[event.target.name]: event.target.value,
			'cities': cities.filter(item => item.country === parseInt(event.target.value)),
			city: "0"
		});
	};

	onCheck = event => {
		this.setState({
			[event.target.name]: event.target.checked
		});
	};

	onRadio = event => {
		this.setState({
			gender: event.target.value
		});
		console.log(this.state.gender);
	};

	onChangeAvatar = event => {
		const reader = new FileReader();
		reader.onload = event => {
			this.setState({
				avatar: event.target.result
			});
		};
		reader.readAsDataURL(event.target.files[0]);
	};

	onSubmit = event => {
		event.preventDefault();
		const errors = {};
			let nameRegExp	= /^[a-zа-яієїґ'\s]{2,30}$/i,
				emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
				phoneRegExp = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;

		if (this.state.username.length < 3 && !nameRegExp.test(this.state.username)) {
			errors.username = "Must be 3 characters or more, only letters";
		}

		if (this.state.userSurname.length < 3 && !nameRegExp.test(this.state.userSurname)) {
			errors.userSurname = "Must be 3 characters or more";
		}

		if (!emailRegExp.test(this.state.email)) {
			errors.email = "Must be symbol @";
		}

		if (!phoneRegExp.test(this.state.phone)) {
			errors.phone = "Must be only digitals and +";
		}

		if (this.state.password < 3) {
			errors.password = "Must be 3 characters or more";
		}

		if (this.state.password !== this.state.repeatPassword) {
			errors.repeatPassword = "Must be equal password";
		}

		if (!this.state.agreeConfidential) {
			errors.agreeConfidential = "You should agree";
		}

		if (this.state.country === "0") {
			errors.country = "Choose country";
		}

		if (this.state.city === "0") {
			errors.city = "Choose city";
		}

		if (Object.keys(errors).length > 0) {
			this.setState({
				errors: errors
			});
		} else {
			this.setState({
				errors: {}
			});

			console.log("submit", this.state);
			const {username, userSurname, email, phone, password, agreeConfidential, gender, country, city, avatar} = this.state;
			fetch('https://httpbin.org/post', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({name: username, surname: userSurname, email: email, phone: phone, pass: password, gender: gender, country: country, city: city, agree: agreeConfidential, avatar: avatar})
			});
			this.setState({
				name: "",
				surname: "",
				email: "",
				phone: "",
				pass: "",
				gender: "male",
				agreeConfidential: true,
				country: "0",
				city: "0",
				avatar: ""
			});
		}
	};

	render() {
		return (
			<div className="form-container card">
				<ul className="step__list">
					<li>Basic</li>
					<li>Contacts</li>
					<li>Avatar</li>
					<li>Finish</li>
				</ul>	
				<form className="form card-body">
					<div className="step active">
						<Field
							id="username"
							labelText="Firstname"
							type="text"
							placeholder="Enter firstname"
							name="username"
							value={this.state.username}
							onChange={this.onChange}
							error={this.state.errors.username}
						/>
						<Field
							id="userSurname"
							labelText="Lastname"
							type="text"
							placeholder="Enter lastname"
							name="userSurname"
							value={this.state.userSurname}
							onChange={this.onChange}
							error={this.state.errors.userSurname}
						/>
						<Field
							id="password"
							labelText="Password"
							type="password"
							placeholder="Enter password"
							name="password"
							value={this.state.password}
							onChange={this.onChange}
							error={this.state.errors.password}
						/>
						<Field
							id="repeatPassword"
							labelText="Repeat password"
							type="password"
							placeholder="Repeat password"
							name="repeatPassword"
							value={this.state.repeatPassword}
							onChange={this.onChange}
							error={this.state.errors.repeatPassword}
						/>
						<Radio
							className="form-check-input"
							id="gender"
							labelText="Gender"
							name="gender"
							selectedValue={this.state.gender}
							onChange={this.onRadio}
							options={this.state.genders}
						/>
					</div>
					<div className="step">
						<h2>Step 02</h2>
						<Field
							id="email"
							labelText="Email"
							type="text"
							placeholder="Enter email"
							name="email"
							value={this.state.email}
							onChange={this.onChange}
							error={this.state.errors.email}
						/>
						<Field
							id="phone"
							labelText="Mobile"
							type="text"
							placeholder="Enter mobile (000) 000-0000"
							name="phone"
							value={this.state.phone}
							onChange={this.onChange}
							error={this.state.errors.phone}
						/>
						<Selector
							className="form-control"
							id="country"
							labelText="Country"
							name="country"
							value={this.state.country}
							options={this.state.countries}
							onChange={this.onChangeCountry}
						/>
						<Selector
							className="form-control"
							id="city"
							labelText="City"
							name="city"
							value={this.state.city}
							options={this.state.cities}
							onChange={this.onChange}
						/>
						<Check
							className="form-check-input"
							type="checkbox"
							id="agreeConfidential"
							labelText="Confirm the processing of data"
							name="agreeConfidential"
							value={this.state.agreeConfidential}
							onChange={this.onCheck}
							checked={this.state.agreeConfidential}
							error={this.state.errors.agreeConfidential}
						/>
					</div>
					<div className="step">
						<h2>Step 03</h2>
						<div className="form-group">
							<label htmlFor="avatar">Avatar</label>
							<input
								type="file"
								className="form-control-file"
								id="avatar"
								name="avatar"
								onChange={this.onChangeAvatar}
							/>
						</div>
					</div>
					<button
						type="button"
						className="btn btn-primary w-100"
						onClick={this.onPrevious}
					>
						Previous
					</button>
					<button
						type="button"
						className="btn btn-primary w-100"
						onClick={this.onNext}
					>
						Next
					</button>
					<button
						type="submit"
						className="btn btn-primary w-100"
						onClick={this.onSubmit}
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}
