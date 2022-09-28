import React, { useState, useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';
import NotelistSection from '../components/NotelistSection';
import SearchSection from '../components/SearchSection';
import { getNotes, deleteNote, archiveNote } from '../utils/data';

const StarterPage = () => {
	const [notesList, setNotesList] = useState([]);

	const [searchParams, setSearchParams] = useSearchParams();

	const keyword = searchParams.get('keyword') || '';

	const setSearchParamsHandler = (keyword) => {
		setSearchParams({ keyword });
	};

	useEffect(() => {
		if (!keyword) {
			setNotesList(getNotes());
		} else {
			setNotesList(
				getNotes().filter((note) =>
					note.title.toLowerCase().includes(keyword.toLowerCase())
				)
			);
		}
	}, [keyword]);

	const deleteNoteHandler = (id) => {
		deleteNote(id);
		setNotesList(getNotes());
	};

	const ArchiveNoteHandler = (id) => {
		archiveNote(id);
		setNotesList(getNotes());
	};

	return (
		<>
			<SearchSection
				searchKeyword={keyword}
				searchHandler={setSearchParamsHandler}
			/>

			<NotelistSection
				notes={notesList}
				deleteNoteHandler={deleteNoteHandler}
				ArchiveNoteHandler={ArchiveNoteHandler}
			/>
		</>
	);
};

export default StarterPage;
