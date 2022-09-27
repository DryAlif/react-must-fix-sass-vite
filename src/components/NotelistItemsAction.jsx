import React from 'react';
import { BiArchiveIn } from 'react-icons/bi';
import { FaRegSave, FaRegFileArchive, FaRegTrashAlt } from 'react-icons/fa';
import { RiDeleteBack2Line } from 'react-icons/ri';
import { GrSave } from 'react-icons/gr';
<BiArchiveIn />;

const NotelistItemsAction = ({
	id,
	deleteNoteHandler,
	archivedStatus,
	ArchiveNoteHandler,
}) => {
	return (
		<div className='note-body__action-wrapper'>
			<button
				className='note-button__action-delete'
				onClick={() => deleteNoteHandler(id)}
			>
				<div className='note-button__status-wrapper'>
					<FaRegTrashAlt />
					<span>Delete</span>
				</div>
			</button>
			<button
				className={
					archivedStatus === false
						? 'note-button__action-archive'
						: 'note-button__action-archived'
				}
				onClick={() => ArchiveNoteHandler(id)}
			>
				<div className='note-button__status-wrapper'>
					{archivedStatus === false ? (
						<>
							<FaRegFileArchive />
							<span>Arsipkan</span>
						</>
					) : (
						<>
							<FaRegSave />
							<span>Pindahkan</span>
						</>
					)}
				</div>
			</button>
		</div>
	);
};

export default NotelistItemsAction;
