import React from 'react';
import NotelistItems from './NotelistItems';
import PropTypes from 'prop-types';

const ArchivedNotelistSection = ({ notes, deleteNoteHandler, ArchiveNoteHandler }) => {
	// const notArchivedNotes = notes.filter((note) => !note.archived);
	// const archivedNotes = notes.filter(note => note.archived);

	return (
		<>
			{notes.length > 0 ? (
				notes.map(note => {
					return <NotelistItems deleteNoteHandler={deleteNoteHandler} ArchiveNoteHandler={ArchiveNoteHandler} key={note.id} date={note.createdAt} {...note} />;
				})
			) : (
				<p className='note-list__not-found'>Tidak ada catatan</p>
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
