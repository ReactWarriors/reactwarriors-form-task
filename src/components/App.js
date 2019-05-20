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
			steps: [
				{id: 0,	name: 'Basic'},
				{id: 1,	name: 'Contacts'},
				{id: 2,	name: 'Avatar'},
				{id: 3, name: 'Finish'},
			],
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
			avatar: "",
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
		};
		console.log(Object.values(cities));
	};
	
	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onChangeCountry = event => {
		this.setState({
			[event.target.name]: event.target.value,
			'cities': Object.values(cities).filter(item => item.country === +event.target.value),
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
		console.log(this.state.avatar)
	};

	onPrev = () => {
		if (this.state.activeStep > 0) this.setState({activeStep: this.state.activeStep - 1})
	};

	onReset = () => {
		this.setState({
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
			avatar: "",
			errors: {}
		});
	};

	onSubmit = event => {
		event.preventDefault();
		const errors = {};
			let nameRegExp	= /^[a-zа-яієїґ'\s]{2,30}$/i,
				emailRegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
				phoneRegExp = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
		switch (this.state.activeStep) {
			case 0: 
				if (this.state.username.length < 3 && !nameRegExp.test(this.state.username)) {
					errors.username = "Must be 3 characters or more, only letters";
				}
				if (this.state.userSurname.length < 3 && !nameRegExp.test(this.state.userSurname)) {
					errors.userSurname = "Must be 3 characters or more";
				}
				if (this.state.password < 3) {
					errors.password = "Must be 3 characters or more";
				}
				if (this.state.password !== this.state.repeatPassword) {
					errors.repeatPassword = "Must be equal password";
				}
				break;
			case 1: 
				if (!emailRegExp.test(this.state.email)) {
					errors.email = "Must be symbol @";
				}
				if (!phoneRegExp.test(this.state.phone)) {
					errors.phone = "Must be only digitals and +";
				}
				if (this.state.country === "0") {
					errors.country = "Choose country";
				}
				if (this.state.city === "0") {
					errors.city = "Choose city";
				}
				break;
			case 2:
				if (!this.state.agreeConfidential) {
					errors.agreeConfidential = "You should agree";
				}
				if (!this.state.avatar) {
					errors.avatar = "Required";
				}
				break;
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
			if (this.state.activeStep < this.state.steps.length) this.setState({activeStep: this.state.activeStep + 1})
		}
	};

	render() {
		return (
			<div className="form-container card">
				<ul className="step__list">
					{
						this.state.steps.map(item => {
							return <li key={item.id} className={this.state.activeStep === item.id ? 'active' : ''}>{item.name}</li>
						})
					}
				</ul>	
				<form className="form card-body">
					<div className={`step ${this.state.activeStep === 0 ? 'active' : ''}`}>
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
					<div className={`step ${this.state.activeStep === 1 ? 'active' : ''}`}>
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
							error={this.state.errors.country}
						/>
						<Selector
							className="form-control"
							id="city"
							labelText="City"
							name="city"
							value={this.state.city}
							options={this.state.cities}
							onChange={this.onChange}
							error={this.state.errors.city}
						/>
					</div>
					<div className={`step ${this.state.activeStep === 2 ? 'active' : ''}`}>
						<div className='avatar'>
							{!(this.state.avatar) ? <img src='./images/default-avatar.59337bae.png' alt='' /> : <img src={this.state.avatar} alt='' />}
						</div>
						<div className="form-group">
							<div className="custom-file">
								<input
									type="file"
									className="custom-file-input"
									id="avatar"
									name="avatar"
									onChange={this.onChangeAvatar}
								/>
								<label className="custom-file-label" htmlFor="avatar">Choose file</label>
								{this.state.errors.avatar ? <div className="invalid-feedback">{this.state.errors.avatar}</div> : null}
							</div>
						</div>
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
					<div className={`step ${this.state.activeStep === 3 ? 'active' : ''}`}>
						<div className='avatar'>
							<img src={this.state.avatar} alt='' />
						</div>
						
						<div>{this.state.username} {this.state.userSurname}</div>
						<div>Email: {this.state.email}</div>
						<div>Mobile: {this.state.phone}</div>
						<div>Location: {this.state.country}, {this.state.city}</div>
						<button
							type="button"
							className="btn btn-primary w-100"
							onClick={this.onReset}
						>
							Reset
						</button>	
					</div>
					<div className={this.state.activeStep === (this.state.steps.length - 1) ? 'hidden' : ''}>
						<button
							type="button"
							className="btn btn-primary m-2"
							onClick={this.onPrev}
							disabled={!this.state.activeStep}
						>
							Previous
						</button>
						<button
							type="button"
							className="btn btn-primary m-2"
							onClick={this.onSubmit}
						>
							Next
						</button>
					</div>
				</form>
			</div>
		);
	}
}
