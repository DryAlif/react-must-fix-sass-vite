import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
import { useLanguage } from '../hooks/useLanguage';

function RegisterPage() {
	const navigate = useNavigate();

	const { langSet } = useLanguage();

	async function onRegisterHandler(user) {
		const { error } = await register(user);
		if (!error) {
			navigate('/');
		}
	}

	return (
		<section className='project-input'>
			<article className='input-section'>
				<h2>{langSet === 'EN' ? 'Register Account' : 'Daftar Akun'} </h2>
				<RegisterInput register={onRegisterHandler} />
				<p>
					{langSet === 'EN' ? 'Back to ' : 'Kembali ke '}
					<Link className='link-login' to='/'>
						{langSet === 'EN' ? 'Login Page' : 'Halaman Login'}
					</Link>
				</p>
			</article>
		</section>
	);
}

export default RegisterPage;
