import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';

const NotesDetail = ({ title, created, body }) => {
	const navigate = useNavigate();
	return (
		<section className='project-input'>
			<article className='input-section'>
				<form className='form'>
					<div className='form__title'>Notes Detail</div>
					<hr className='hr-line' />
					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputBookTitle'>
								Judul Catatan
							</label>
							<p className='note-input__title__char-limit'>
								Created At: {showFormattedDate(created)}
							</p>
						</div>

						<input
							id='inputBookTitle'
							data-validation='Judul Buku'
							type='text'
							className='form__input'
							placeholder='Ketik Judul Catatan'
							value={title}
							readOnly
						/>
						<span className='form__error'></span>
					</div>
					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputNoteArea'>
								Catatan
							</label>
						</div>
						<div
							id='inputContentEditable'
							className='form__input contentEditable'
						>
							{parse(body)}
						</div>

						<span className='form__error'></span>
					</div>

					<div className='form__item'>
						<button
							type='button'
							className='form__btn'
							onClick={() => {
								navigate(-1);
							}}
						>
							Back To Note List
						</button>
					</div>
				</form>
			</article>
		</section>
	);
};

NotesDetail.propTypes = {
	title: PropTypes.string.isRequired,
	created: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

export default NotesDetail;
