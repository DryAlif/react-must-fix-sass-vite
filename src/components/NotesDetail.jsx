import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { showFormattedDate } from '../utils/data';

// Custom Hook
import { useLanguage } from '../hooks/useLanguage';

const NotesDetail = ({ title, createdAt, body, archived, backButtonHandler }) => {
	const { langSet } = useLanguage();

	return (
		<section className='project-input'>
			<article className='input-section'>
				<form className='form'>
					<div className='form__title'>{langSet === 'EN' ? 'Notes Detail' : 'Detail Catatan'}</div>
					<hr className='hr-line' />
					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputBookTitle'>
								{langSet === 'EN' ? 'Title' : 'Judul Catatan'}
							</label>

							<p className='note-input__title__char-limit'>
								{langSet === 'EN' ? 'Created: ' : 'Dibuat: '}
								{langSet === 'EN' ? showFormattedDate(createdAt, 'EN') : showFormattedDate(createdAt, 'ID')}
							</p>
						</div>

						<input id='inputBookTitle' data-validation='Judul Buku' type='text' className='form__input' placeholder={langSet === 'EN' ? 'Type Note Title: ' : 'Ketik Judul Catatan'} value={title} readOnly />
						<span className='form__error'></span>
					</div>
					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputNoteArea'>
								{langSet === 'EN' ? 'Note Body' : 'Catatan'}
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
							{archived === true ? (langSet === 'EN' ? 'Back To Archived List' : 'Kembali ke Halaman Arsip') : langSet === 'EN' ? 'Back To Note List' : 'Kembali ke Halaman Catatan Aktif'}
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
	archived: PropTypes.bool.isRequired,
	backButtonHandler: PropTypes.func.isRequired
};

export default NotesDetail;
