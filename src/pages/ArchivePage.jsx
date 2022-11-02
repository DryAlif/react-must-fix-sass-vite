import React, { useState, useEffect } from 'react';

import { useSearchParams, useNavigate } from 'react-router-dom';
import NotelistSection from '../components/NotelistSection';
import ArchivedNotelistSection from '../components/ArchivedNotelistSection';

import SearchSection from '../components/SearchSection';
// import { getNotes } from '../utils/data';

//backdrop
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Api
import { getArchivedNotes, deleteNote, unarchiveNote } from '../utils/api';

//Material UI backdrop set
const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff'
	}
}));

const ArchivePage = () => {
	//use backdrop
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
			const { data } = await getArchivedNotes();

			setNotesList(data);
			setLoading(data);
			console.table(data);
		};

		getNote();
		// console.log(notesList);
	}, []);

	// useEffect(() => {
	// 	if (!keyword) {
	// 		setNotesList(getNotes());
	// 	} else {
	// 		setNotesList(getNotes().filter(note => note.title.toLowerCase().includes(keyword.toLowerCase())));
	// 	}
	// }, [keyword]);

	const notesFilter = notesList.filter(note => note.title.toLowerCase().includes(keyword.toLowerCase()));

	const deleteNoteHandler = async id => {
		await deleteNote(id);
		navigate('/archived');
	};

	const toggleArchiveNoteHandler = async id => {
		await unarchiveNote(id);
		navigate('/');
		// setNotesList(getNotes());
	};

	return (
		<>
			{/* 
			<ArchivedNotelistSection notes={notesList} deleteNoteHandler={deleteNoteHandler} ArchiveNoteHandler={toggleArchiveNoteHandler} /> */}
			<SearchSection searchKeyword={keyword} searchHandler={setSearchParamsHandler} />

			<section className='project-list'>
				<article className='archived-notes'>
					<header className='note-header archived'>
						<h2>Archived Note List</h2>
					</header>
					<div className='note-list archived'>
						{loading ? (
							<ArchivedNotelistSection notes={notesFilter} deleteNoteHandler={deleteNoteHandler} ArchiveNoteHandler={toggleArchiveNoteHandler} />
						) : (
							<Backdrop className={classes.backdrop} open>
								<CircularProgress color='inherit' />
							</Backdrop>
						)}
					</div>
				</article>
			</section>
		</>
	);
};

export default ArchivePage;
