import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotesNotFound = () => {
	const navigate = useNavigate();

	return (
		<section className='project-input'>
			<article className='input-section'>
				<form className='form'>
					<div className='form__title'>Notes Not Exist</div>
					<hr className='hr-line' />
					<div className='form__item'>
						<button
							type='button'
							className='form__btn'
							onClick={() => {
								navigate('/');
							}}
						>
							Return to Notes List
						</button>
					</div>
				</form>
			</article>
		</section>
	);
};

export default NotesNotFound;
