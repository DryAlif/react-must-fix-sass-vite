import React from 'react';
import { addNote } from '../utils/data';
import { useNavigate } from 'react-router-dom';
import InputSection from '../components/InputSection';

const AddPage = () => {
	const navigate = useNavigate();

	const createNoteHandler = ({ noteTitle, noteBodyTextArea }) => {
		addNote({ noteTitle, noteBodyTextArea });
		navigate('/');
	};

	return (
		<>
			<InputSection createNoteHandler={createNoteHandler} />
		</>
	);
};

export default AddPage;
