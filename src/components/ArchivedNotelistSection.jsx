import React from 'react';
import NotelistItems from './NotelistItems';
import PropTypes from 'prop-types';

// Custom Hooks
import { useLanguage } from '../hooks/useLanguage';

const ArchivedNotelistSection = ({ notes, deleteNoteHandler, ArchiveNoteHandler }) => {
	const { langSet } = useLanguage();

	return (
		<>
			{notes.length > 0 ? (
				notes.map(note => {
					return <NotelistItems deleteNoteHandler={deleteNoteHandler} ArchiveNoteHandler={ArchiveNoteHandler} key={note.id} date={note.createdAt} {...note} />;
				})
			) : (
				<p className='note-list__not-found'>{langSet === 'EN' ? 'Notes not found' : 'Tidak ada catatan'}</p>
			)}
		</>
	);
};

ArchivedNotelistSection.propTypes = {
	notes: PropTypes.array.isRequired,
	deleteNoteHandler: PropTypes.func.isRequired,
	ArchiveNoteHandler: PropTypes.func.isRequired
};

export default ArchivedNotelistSection;
