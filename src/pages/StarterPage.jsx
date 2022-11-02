import React, { useState, useEffect } from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';
import NotelistSection from '../components/NotelistSection';
import SearchSection from '../components/SearchSection';
// import { getNotes, archiveNote } from '../utils/data';

//backdrop
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

//Toast
import { Toaster, toast } from 'react-hot-toast';

//Api
import { getActiveNotes, deleteNote, archiveNote } from '../utils/api';

const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff'
	}
}));

const StarterPage = () => {
	//backdrop
	const classes = useStyles();

	const [loading, setLoading] = useState(null);
	const [notesList, setNotesList] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const keyword = searchParams.get('keyword') || '';

	const setSearchParamsHandler = keyword => {
		setSearchParams({ keyword });
	};

	const navigate = useNavigate();

	async function wait(ms) {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	}

	useEffect(() => {
		const getNote = async () => {
			await wait(350);
			const { data } = await getActiveNotes();

			setNotesList(data);
			setLoading(data);
			console.table(data);
		};

		getNote();
		// console.log(notesList);
	}, []);

	const notesFilter = notesList.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()));

	const toggleArchiveNoteHandler = async id => {
		await archiveNote(id);
		navigate('/archived');
	};

	const deleteNoteHandler = async id => {
		await deleteNote(id);
		navigate(0);
	};

	return (
		<>
			<Toaster position='top-right' reverseOrder={false} />
			<SearchSection searchKeyword={keyword} searchHandler={setSearchParamsHandler} />

			<section className='project-list'>
				<article className='saved-notes'>
					<header className='note-header'>
						<h2>Saved Notes</h2>
					</header>
					<div className='note-list'>
						{loading ? (
							<NotelistSection notes={notesFilter} deleteNoteHandler={deleteNoteHandler} ArchiveNoteHandler={toggleArchiveNoteHandler} />
						) : (
							<Backdrop className={classes.backdrop} open>
								<CircularProgress color='inherit' />
							</Backdrop>
						)}

						{/* {notes.length > 0 ? (
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
						)} */}
					</div>
				</article>
			</section>
		</>
	);
};

export default StarterPage;
