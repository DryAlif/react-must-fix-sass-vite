import React from "react";
import PropTypes from "prop-types";
import autoBindReact from "auto-bind/react";

class RegisterInput extends React.Component {
	constructor(props) {
		super(props);
		autoBindReact(this);

		this.state = {
			name: "",
			email: "",
			password: "",
		};
	}

	onNameChange(event) {
		this.setState(() => {
			return {
				name: event.target.value,
			};
		});
	}

	onEmailChange(event) {
		this.setState(() => {
			return {
				email: event.target.value,
			};
		});
	}

	onPasswordChange(event) {
		this.setState(() => {
			return {
				password: event.target.value,
			};
		});
	}

	onSubmitHandler(event) {
		event.preventDefault();

		this.props.register({
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		});
	}

	render() {
		return (
			<>
				<form onSubmit={this.onSubmitHandler} className='form'>
					<div className='form__title'>Register</div>
					<hr className='hr-line' />
					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputName'>
								Name
							</label>
						</div>

						<input
							type='text'
							className='form__input'
							placeholder='Ketik Nama'
							value={this.state.name}
							onChange={this.onNameChange}
						/>
						<span className='form__error'></span>
					</div>
					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputNoteArea'>
								Email
							</label>
						</div>
						<input
							type='email'
							className='form__input'
							placeholder='Ketik Email'
							value={this.state.email}
							onChange={this.onEmailChange}
							autoComplete='off'
						/>

						<span className='form__error'></span>
					</div>

					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputNoteArea'>
								Password
							</label>
						</div>
						<input
							type='password'
							className='form__input'
							placeholder='Ketik Password'
							autoComplete='current-password'
							value={this.state.password}
							onChange={this.onPasswordChange}
						/>

						<span className='form__error'></span>
					</div>

					<div className='form__item'>
						<button type='submit' className='form__btn'>
							Register
						</button>
					</div>
				</form>
			</>
		);
	}
}

RegisterInput.propTypes = {
	register: PropTypes.func.isRequired,
};

export default RegisterInput;
