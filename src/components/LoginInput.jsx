import React from 'react';
import PropTypes from 'prop-types';
import autoBindReact from 'auto-bind/react';
import { LanguageContextConsumer } from '../context/LanguageContext';

class LoginInput extends React.Component {
	constructor(props) {
		super(props);
		autoBindReact(this);

		this.state = {
			email: '',
			password: ''
		};
	}

	onEmailChangeHandler(event) {
		this.setState(() => {
			return {
				email: event.target.value
			};
		});
	}

	onPasswordChangeHandler(event) {
		this.setState(() => {
			return {
				password: event.target.value
			};
		});
	}

	onSubmitHandler(event) {
		event.preventDefault();

		this.props.login({
			email: this.state.email,
			password: this.state.password
		});
	}

	render() {
		return (
			<form onSubmit={this.onSubmitHandler} className='form'>
				<div className='form__item'>
					<div className='new-notes-label'>
						<label className='form__label' htmlFor='inputName'>
							<LanguageContextConsumer>
								{({ langSet }) => {
									return <>{langSet === 'EN' ? 'Email Address' : 'Alamat Email'}</>;
								}}
							</LanguageContextConsumer>
						</label>
					</div>

					<input type='email' placeholder='Email' className='form__input' value={this.state.email} onChange={this.onEmailChangeHandler} autoComplete='off' />
					<span className='form__error'></span>
				</div>
				<div className='form__item'>
					<div className='new-notes-label'>
						<label className='form__label' htmlFor='inputNoteArea'>
							Password
						</label>
					</div>
					<input type='password' placeholder='Password' className='form__input' value={this.state.password} onChange={this.onPasswordChangeHandler} autoComplete='current-password' />

					<span className='form__error'></span>
				</div>
				<div className='form__item'>
					<button className='form__btn'>
						<LanguageContextConsumer>
							{({ langSet }) => {
								return <>{langSet === 'EN' ? 'Log in' : 'Masuk Sekarang'}</>;
							}}
						</LanguageContextConsumer>
					</button>
				</div>
			</form>
		);
	}
}

LoginInput.propTypes = {
	login: PropTypes.func.isRequired
};

export default LoginInput;
