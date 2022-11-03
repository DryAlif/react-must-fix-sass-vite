import React from 'react';
import PropTypes from 'prop-types';
import { FaRegFileArchive, FaRegSave, FaRegTrashAlt } from 'react-icons/fa';
// Custom Hooks
import { useLanguage } from '../hooks/useLanguage';

const NotelistItemsAction = ({ id, deleteNoteHandler, archivedStatus, ArchiveNoteHandler }) => {
	const { langSet } = useLanguage();
	return (
		<div className='note-body__action-wrapper'>
			<button className='note-button__action-delete' onClick={() => deleteNoteHandler(id)}>
				<div className='note-button__status-wrapper'>
					<FaRegTrashAlt />
					&nbsp;
					<span>{langSet === 'EN' ? ' Delete' : ' Hapus'}</span>
				</div>
			</button>
			<button className={archivedStatus === false ? 'note-button__action-archive' : 'note-button__action-archived'} onClick={() => ArchiveNoteHandler(id)}>
				<div className='note-button__status-wrapper'>
					{archivedStatus === false ? (
						<>
							<FaRegFileArchive />
							&nbsp;
							<span>{langSet === 'EN' ? ' Archive This' : ' Arsipkan'}</span>
						</>
					) : (
						<>
							<FaRegSave />
							&nbsp;
							<span>{langSet === 'EN' ? ' Move to Active' : ' Pindahkan'}</span>
						</>
					)}
				</div>
			</button>
		</div>
	);
};

NotelistItemsAction.propTypes = {
	id: PropTypes.string.isRequired,
	archivedStatus: PropTypes.bool.isRequired,
	deleteNoteHandler: PropTypes.func.isRequired,
	ArchiveNoteHandler: PropTypes.func.isRequired
};

export default NotelistItemsAction;
