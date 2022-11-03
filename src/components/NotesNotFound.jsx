import React from 'react';
import { useNavigate } from 'react-router-dom';
//Custom Hooks
import { useLanguage } from '../hooks/useLanguage';

const NotesNotFound = () => {
	const { langSet } = useLanguage();
	const navigate = useNavigate();

	return (
		<section className='project-input'>
			<article className='input-section'>
				<form className='form'>
					<div className='form__title'>{langSet === 'EN' ? 'Notes Not Exist' : 'Catatan Tidak Ada'}</div>
					<hr className='hr-line' />
					<div className='form__item'>
						<button
							type='button'
							className='form__btn'
							onClick={() => {
								navigate('/');
							}}>
							{langSet === 'EN' ? '	Return to Active Notes List' : 'Kembali Ke Halaman Catatan Aktif'}
						</button>
					</div>
				</form>
			</article>
		</section>
	);
};

export default NotesNotFound;
