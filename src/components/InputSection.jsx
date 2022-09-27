import React, { useState, useRef } from 'react';

const InputSection = ({ createNoteHandler }) => {
	const titleCharacterLimit = 50;

	const [noteTitle, setNoteTitle] = useState('');
	const [noteBodyTextArea, setNoteBodyTextArea] = useState('');

	const contentref = useRef(null);

	const onChange = (e) => {
		const html = e.target.innerHTML;
		setNoteBodyTextArea(html);
	};

	const onChangeTitle = (event) => {
		if (titleCharacterLimit - event.target.value.length >= 0) {
			setNoteTitle(event.target.value);
		}
	};

	const onSubmitForm = (event) => {
		event.preventDefault();

		if (noteTitle.trim().length > 0) {
			const refValue = contentref.current.innerHTML;

			const noteBodyTextArea = refValue;

			createNoteHandler({ noteTitle, noteBodyTextArea });
			setNoteTitle('');
		}
	};

	const paste = (e) => {
		e.preventDefault();
		const open = new RegExp('<', 'gi');
		const close = new RegExp('>', 'gi');
		const text = (e.originalEvent || e).clipboardData
			.getData('text/plain')
			.replace(open, '&lt')
			.replace(close, '&gt');
		document.execCommand('insertHTML', false, text);
	};

	return (
		<section className='project-input'>
			<article className='input-section'>
				<form onSubmit={onSubmitForm} className='form'>
					<div className='form__title'>Input New Note</div>
					<hr className='hr-line' />
					<div className='form__item'>
						<div className='new-notes-label'>
							<label className='form__label' htmlFor='inputBookTitle'>
								Judul Catatan
							</label>
							<p className='note-input__title__char-limit'>
								Sisa karakter: {titleCharacterLimit - noteTitle.length}
							</p>
						</div>

						<input
							id='inputBookTitle'
							data-validation='Judul Buku'
							type='text'
							className='form__input'
							placeholder='Ketik Judul Catatan'
							value={noteTitle}
							onChange={onChangeTitle}
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
							ref={contentref}
							id='inputContentEditable'
							className='form__input contentEditable'
							onChange={onChange}
							data-placeholder='Input text ....'
							contentEditable
							suppressContentEditableWarning={true}
							onPaste={(e) => paste(e)}
						>
							{noteBodyTextArea}
						</div>

						<span className='form__error'></span>
					</div>

					<div className='form__item'>
						<button type='submit' className='form__btn'>
							Save Note
						</button>
					</div>
				</form>
			</article>
		</section>
	);
};

export default InputSection;
