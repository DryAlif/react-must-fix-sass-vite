import React from 'react';
// import { addNote } from "../utils/data";
// import { addNote } from "../utils/api";
import {addNote} from '../utils/api';

import {useNavigate} from 'react-router-dom';
import InputSection from '../components/InputSection';

const AddPage = () => {
	const navigate = useNavigate();

	async function createNoteHandler(noteTitle, noteBodyTextArea) {
		await addNote({ title: noteTitle, body: noteBodyTextArea });
		navigate('/');
	}

	return (
		<>
			<InputSection createNoteHandler={createNoteHandler} />
		</>
	);
};

export default AddPage;
