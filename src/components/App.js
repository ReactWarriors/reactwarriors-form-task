import React from "react";
import Field from "./Field";
import Check from "./Check";

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			username: "",
			userSurname: "",
			email: "",
			phone: "",
			password: "",
			agreeTerms: true,
			agreeConfidential: true,
			errors: {
				username: false,
				userSurname: false,
				email: false,
				phone: false,
				password: false,
				repeatPassword: false,
				agreeTerms: false,
				agreeConfidential: false,
			}
		};
	}

	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onCheck = event => {
		this.setState({
			[event.target.name]: event.target.checked
		});
	};

	onSubmit = event => {
		event.preventDefault();
		const errors = {};
			let nameRegExp	= /^[a-zа-яієїґ\'\s]{2,30}$/i,
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

		if (!this.state.agreeTerms) {
			errors.agreeTerms = "You should agree";
		}

		if (!this.state.agreeConfidential) {
			errors.agreeConfidential = "You should agree";
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
			const {username, userSurname, email, phone, password, repeatPassword, agreeTerms, agreeConfidential} = this.state;
			fetch('https://httpbin.org/post', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({username, userSurname, email, phone, password, repeatPassword, agreeTerms, agreeConfidential})
			});
		}
	};

	render() {
		return (
			<div className="form-container card">
				<form className="form card-body">
					<Field
						id="username"
						labelText="Username"
						type="text"
						placeholder="Enter username"
						name="username"
						value={this.state.username}
						onChange={this.onChange}
						error={this.state.errors.username}
					/>
					<Field
						id="userSurname"
						labelText="User Surname"
						type="text"
						placeholder="Enter user surname"
						name="userSurname"
						value={this.state.userSurname}
						onChange={this.onChange}
						error={this.state.errors.userSurname}
					/>
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
						labelText="Phone"
						type="text"
						placeholder="Enter phone (000)-000-0000"
						name="phone"
						value={this.state.phone}
						onChange={this.onChange}
						error={this.state.errors.phone}
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
{/*							<div className="form-group">
								<label>Repeat password</label>
								<input
									type="text"
									className="form-control"
									placeholder="Enter repeat password"
									ref={node => (this.repeatPassword = node)}
									name="repeatPassword"
									value={this.state.repeatPassword}
									onChange={this.onChange}
								/>
								{this.state.errors.repeatPassword ? (
									<div className="invalid-feedback">
										{this.state.errors.repeatPassword}
									</div>
								) : null}
							</div>*/}
					<Check
						className="form-check-input"
						type="checkbox"
						id="agreeTerms"
						labelText="Confirm the Terms"
						name="agreeTerms"
						value={this.state.agreeTerms}
						defaultChecked={this.state.agreeTerms}
						onChange={this.onCheck}
						checked={this.state.agreeTerms}
						error={this.state.errors.agreeTerms}
					/>
					<Check
						className="form-check-input"
						type="checkbox"
						id="agreeConfidential"
						labelText="Confirm the processing of data"
						name="agreeConfidential"
						value={this.state.agreeConfidential}
						defaultChecked={this.state.agreeConfidential}
						onChange={this.onCheck}
						checked={this.state.agreeConfidential}
						error={this.state.errors.agreeConfidential}
					/>
{/*							<div className="form-check mb-2">
								<input
									className="form-check-input"
									type="checkbox"
									id="agree"
									name="agree"
									value={this.state.agree}
									onChange={this.onChangeAgree}
									checked={this.state.agree}
								/>
								<label className="form-check-label" htmlFor="agree">
									Confirm the processing of data
								</label>
							</div>*/}
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
