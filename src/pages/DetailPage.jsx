import React from 'react';
import { useParams } from 'react-router-dom';
import NotesDetail from '../components/NotesDetail';
import NotesNotFound from '../components/NotesNotFound';
import { getNotesDetail } from '../utils/data';

const DetailPageWrapper = () => {
	const { id } = useParams();
	return <DetailPage id={Number(id)} />;
};

class DetailPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			note: getNotesDetail(props.id),
		};
	}

	render() {
		if (this.state.note == '' || this.state.note === null) {
			return <NotesNotFound />;
		}

		return (
			<section>
				<NotesDetail
					title={this.state.note.title}
					created={this.state.note.createdAt}
					body={this.state.note.body}
				/>
			</section>
		);
	}
}

export default DetailPageWrapper;
