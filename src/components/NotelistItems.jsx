import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/data';
import NotelistItemsAction from './NotelistItemsAction';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';

const decodeHtml = (html) => {
	var txt = document.createElement('textarea');
	txt.innerHTML = html;
	txt.remove();
	return txt.value;
};

const NotelistItems = ({
	title,
	date,
	body,
	id,
	archived,
	deleteNoteHandler,
	ArchiveNoteHandler,
}) => {
	let newbodyhtml = decodeHtml(body);

	return (
		<div className='note-item'>
			<div className='note-body__content'>
				<h3 className='note-body__content--title'>
					<Link to={`/notes/${id}`}>{title}</Link>
				</h3>
				<p className='note-body__content--date'>{showFormattedDate(date)}</p>

				<div className='note-body__content--text'>{parse(newbodyhtml)}</div>
			</div>

			<NotelistItemsAction
				id={id}
				deleteNoteHandler={deleteNoteHandler}
				archivedStatus={archived}
				ArchiveNoteHandler={ArchiveNoteHandler}
			/>
		</div>
	);
};

NotelistItems.propType = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	archived: PropTypes.bool.isRequired,
	date: PropTypes.number.isRequired,
	deleteNoteHandler: PropTypes.func.isRequired,
	ArchiveNoteHandler: PropTypes.func.isRequired,
};

export default NotelistItems;
