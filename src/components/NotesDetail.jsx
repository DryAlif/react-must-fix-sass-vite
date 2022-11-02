import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';

const NotesDetail = ({ title, createdAt, body, archived, backButtonHandler }) => {
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
							<p className='note-input__title__char-limit'>Created At: {showFormattedDate(createdAt)}</p>
						</div>

						<input id='inputBookTitle' data-validation='Judul Buku' type='text' className='form__input' placeholder='Ketik Judul Catatan' value={title} readOnly />
						<span className='form__error'></span>
					</div>
					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputNoteArea'>
								Catatan
							</label>
						</div>
						<div id='inputContentEditable' className='form__input contentEditable'>
							{parse(body)}
						</div>

						<span className='form__error'></span>
					</div>

					<div className='form__item'>
						<button
							type='button'
							className='form__btn'
							onClick={() => {
								backButtonHandler(archived);
							}}>
							{archived === true ? 'Back To Archived List' : 'Back To Note List'}
						</button>
					</div>
				</form>
			</article>
		</section>
	);
};

NotesDetail.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired
};

export default NotesDetail;
