import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/api";

function LoginPage({ loginSuccess }) {
	async function onLogin({ email, password }) {
		const { error, data } = await login({ email, password });

		if (!error) {
			loginSuccess(data);
		}
	}

	return (
		<section className='project-input'>
			<article className='input-section'>
				<h2>Silakan masuk untuk melanjutkan ...</h2>
				<LoginInput login={onLogin} />
				<p>
					Belum punya akun?{" "}
					<Link className='link-login' to='/register'>
						Daftar di sini.
					</Link>
				</p>
			</article>
		</section>
	);
}

LoginPage.propTypes = {
	loginSuccess: PropTypes.func,
};

export default LoginPage;
