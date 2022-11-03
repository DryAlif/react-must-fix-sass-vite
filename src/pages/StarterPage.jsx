import React, { useEffect, useState } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import NotelistSection from '../components/NotelistSection';
import SearchSection from '../components/SearchSection';
//Custom Hooks
import { useLanguage } from '../hooks/useLanguage';

//Api
import { archiveNote, deleteNote, getActiveNotes } from '../utils/api';

//backdrop
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff'
	}
}));

const StarterPage = () => {
	const { langSet } = useLanguage();

	//backdrop
	const classes = useStyles();

	const [loading, setLoading] = useState(true);
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
			setLoading(false);
			console.table(data);
		};

		getNote();
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

	if (loading) {
		return (
			<Backdrop className={classes.backdrop} open>
				<CircularProgress color='inherit' />
			</Backdrop>
		);
	}

	return (
		<>
			<SearchSection searchKeyword={keyword} searchHandler={setSearchParamsHandler} />

			<section className='project-list'>
				<article className='saved-notes'>
					<header className='note-header'>
						<h2>{langSet === 'EN' ? 'Your Active Notes' : 'Catatan Aktif Kamu'}</h2>
					</header>
					<div className='note-list'>
						<NotelistSection notes={notesFilter} deleteNoteHandler={deleteNoteHandler} ArchiveNoteHandler={toggleArchiveNoteHandler} />
					</div>
				</article>
			</section>
		</>
	);
};

export default StarterPage;
