import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import NotesDetail from '../components/NotesDetail';
import NotesNotFound from '../components/NotesNotFound';
//import { getNotesDetail } from '../utils/data';
import {getNote} from '../utils/api';

//backdrop
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff'
	}
}));

const DetailPage = () => {
	const [note, setNote] = useState({});
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	const navigate = useNavigate();

	//backdrop
	const classes = useStyles();

	const backButtonHandler = archived => {
		if (archived === true) {
			navigate('/archived');
		} else {
			navigate('/');
		}
	};

	async function wait(ms) {
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	}

	useEffect(() => {
		const getDetail = async id => {
			await wait(350);
			const { data } = await getNote(id);
			setNote(data);
			setLoading(false);
			// console.log('detailpage data', data.archived);
		};

		getDetail(id);
	}, [id]);

	if (note === null) {
		return <NotesNotFound />;
	}

	if (loading) {
		return (
			<Backdrop className={classes.backdrop} open>
				<CircularProgress color='inherit' />
			</Backdrop>
		);
	}

	return (
		<section>
			<NotesDetail {...note} backButtonHandler={backButtonHandler} />
		</section>
	);
	// }
};

export default DetailPage;
