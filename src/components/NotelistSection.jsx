import React from 'react';
import NotelistItems from './NotelistItems';
import PropTypes from 'prop-types';

const NotelistSection = ({ notes, deleteNoteHandler, ArchiveNoteHandler }) => {
	// const notArchivedNotes = notes.filter((note) => !note.archived);
	// const archivedNotes = notes.filter((note) => note.archived);

	return (
		<>
			{/* Contoh component ke1 */}
			{/* <section className='project-list'>
				<article className='saved-notes'>
					<header className='note-header'>
						<h2>Saved Notes</h2>
					</header>
					<div className='note-list'> */}

			{notes.length > 0 ? (
				notes.map((note) => {
					return (
						<NotelistItems
							deleteNoteHandler={deleteNoteHandler}
							ArchiveNoteHandler={ArchiveNoteHandler}
							key={note.id}
							date={note.createdAt}
							{...note}
						/>
					);
				})
			) : (
				<p className='note-list__not-found'>Tidak ada catatan</p>
			)}

			{/* </div>
				</article>
			</section> */}

			{/* Contoh component ke2 */}

			{/* <section className='project-list'>
				<article className='saved-notes'>
					<header className='note-header'>
						<h2>Saved Notes</h2>
					</header>
					<div className='note-list'>
						{notes.length > 0 ? (
							notes.map((note) => {
								return (
									<NotelistItems
										deleteNoteHandler={deleteNoteHandler}
										ArchiveNoteHandler={ArchiveNoteHandler}
										key={note.id}
										date={note.createdAt}
										{...note}
									/>
								);
							})
						) : (
							<p className='note-list__not-found'>Tidak ada catatan</p>
						)}
					</div>
				</article>
			</section> */}

			{/* <article className='archived-notes'>
				<header className='note-header archived'>
					<h2>Archived Note List</h2>
				</header>
				<div className='note-list archived'>
					{archivedNotes.length > 0 ? (
						archivedNotes.map((note) => {
							return (
								<NotelistItems
									deleteNoteHandler={deleteNoteHandler}
									ArchiveNoteHandler={ArchiveNoteHandler}
									key={note.id}
									date={note.createdAt}
									{...note}
								/>
							);
						})
					) : (
						<p className='note-list__not-found'>Tidak ada catatan</p>
					)}
				</div>
			</article>
		</section> */}
		</>
	);
};

NotelistSection.propTypes = {
	notes: PropTypes.array.isRequired,
	deleteNoteHandler: PropTypes.func.isRequired,
	ArchiveNoteHandler: PropTypes.func.isRequired,
};

export default NotelistSection;
