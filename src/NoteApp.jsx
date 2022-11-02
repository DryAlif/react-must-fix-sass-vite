import React from 'react';
import { Routes, Route } from 'react-router-dom';
import autoBindReact from 'auto-bind/react';
import Navbar from './components/Navbar';

// import HomePage from './pages/HomePage';
import StarterPage from './pages/StarterPage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ArchivePage from './pages/ArchivePage';
import PageNotFound from './components/PageNotFound';

import { getUserLogged, putAccessToken } from './utils/api';

class NoteApp extends React.Component {
	constructor(props) {
		super(props);
		autoBindReact(this);

		this.state = {
			authedUser: null,
			initializing: true
		};
	}

	async componentDidMount() {
		const { data } = await getUserLogged();

		this.setState(() => {
			return {
				authedUser: data,
				initializing: false
			};
		});
	}

	async onLoginSuccess({ accessToken }) {
		putAccessToken(accessToken);
		const { data } = await getUserLogged();

		this.setState(() => {
			return {
				authedUser: data
			};
		});
	}

	onLogout() {
		this.setState(() => {
			return {
				authedUser: null
			};
		});
		putAccessToken('');
	}

	render() {
		if (this.state.initializing) {
			return null;
		}
		if (this.state.authedUser === null) {
			return (
				<>
					<header>
						<section className='app-nav-header'>
							<div className='app-nav-header--items'>
								<h1 className='app-nav-header--items__logo'>Personal Notes APP</h1>
							</div>
						</section>
					</header>

					<main>
						<Routes>
							<Route path='/*' element={<LoginPage loginSuccess={this.onLoginSuccess} />} />
							<Route path='/register' element={<RegisterPage />} />
						</Routes>
					</main>
				</>
			);
		}
		return (
			<>
				<header>
					<Navbar logout={this.onLogout} name={this.state.authedUser.name} />
				</header>

				<main>
					<Routes>
						<Route path='/' element={<StarterPage />} />
						<Route path='/add' element={<AddPage />} />
						<Route path='/archived' element={<ArchivePage />} />
						<Route path='/notes/:id' element={<DetailPage />} />
						<Route path='*' element={<PageNotFound />} />
						<Route path='/register' element={<RegisterPage />} />
					</Routes>
				</main>
			</>
		);
	}
}

export default NoteApp;
