import React from 'react';
import autoBindReact from 'auto-bind/react';
import { useSearchParams } from 'react-router-dom';
import NotelistSection from '../components/NotelistSection';
import SearchSection from '../components/SearchSection';
import { getNotes, deleteNote, archiveNote } from '../utils/data';

const HomePageWrapper = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const keyword = searchParams.get('keyword');

	function changeSearchParams(keyword) {
		setSearchParams({ keyword });
	}

	return (
		<HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
	);
};

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		autoBindReact(this);

		this.state = {
			notes: getNotes(),
			keyword: props.defaultKeyword || '',
		};
	}

	deleteNoteHandler(id) {
		deleteNote(id);

		this.setState(() => {
			return {
				notes: getNotes(),
			};
		});
	}

	ArchiveNoteHandler(id) {
		archiveNote(id);

		this.setState(() => {
			return {
				notes: getNotes(),
			};
		});
	}

	onKeywordChangeHandler(keyword) {
		this.setState(() => {
			return {
				keyword,
			};
		});

		this.props.keywordChange(keyword);
	}

	render() {
		const filterNotes = this.state.notes.filter((note) => {
			return note.title
				.toLowerCase()
				.includes(this.state.keyword.toLowerCase());
		});

		return (
			<>
				<SearchSection
					searchKeyword={this.state.keyword}
					searchHandler={this.onKeywordChangeHandler}
				/>

				<NotelistSection
					notes={filterNotes}
					deleteNoteHandler={this.deleteNoteHandler}
					ArchiveNoteHandler={this.ArchiveNoteHandler}
				/>
			</>
		);
	}
}

export default HomePageWrapper;
