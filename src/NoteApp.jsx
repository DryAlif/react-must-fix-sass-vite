import React from 'react';
import { Route, Routes } from 'react-router-dom';
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
import ThemeSelector from './components/ThemeSelector';

import { getUserLogged, putAccessToken } from './utils/api';
import { BiWorld } from 'react-icons/bi';
// custom hooks
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { LanguageContextConsumer } from './context/LanguageContext';

const NoteAppWrapper = () => {
	const { themeMode } = useTheme();
	const { changeLocale, langSet } = useLanguage();

	function toggleLocale() {
		changeLocale(langSet === 'ID' ? 'EN' : 'ID');
	}

	return (
		<>
			<div className='hiddenDiv'>
				{themeMode === 'dark' ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', '')}
				{themeMode === 'dark' ? (document.body.style.backgroundColor = '#1a1b1e') : (document.body.style.backgroundColor = '#f9f3f3')}
			</div>

			<NoteApp defaultLanguage={langSet} toggleLocale={toggleLocale} />
		</>
	);
};

class NoteApp extends React.Component {
	constructor(props) {
		super(props);
		autoBindReact(this);

		this.state = {
			authedUser: null,
			initializing: true,
			defaultLanguage: props.defaultLanguage,
			toggleLocale: props.toggleLocale
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

	onToggleLanguageHandler(defaultLanguage) {
		this.setState({
			defaultLanguage: !this.state.defaultLanguage
		});
		this.props.toggleLocale(defaultLanguage);
	}

	render() {
		if (this.state.initializing) {
			return null;
		}
		if (this.state.authedUser === null) {
			return (
				<>
					<header>
						<section className={`app-nav-header`}>
							<div className='app-nav-header--items'>
								<h1 className='app-nav-header--items__logo'>
									<LanguageContextConsumer>
										{({ langSet }) => {
											return <>{langSet === 'EN' ? 'Notes App' : 'Aplikasi Catatan'}</>;
										}}
									</LanguageContextConsumer>
								</h1>
								<nav className='app-nav-header--items__link'>
									<LanguageContextConsumer>
										{({ langSet }) => {
											return (
												<>
													<a onClick={() => this.onToggleLanguageHandler(langSet)} className='app-nav-header--items__link-url'>
														<BiWorld />
														{langSet === 'EN' ? 'EN' : 'ID'}
													</a>
												</>
											);
										}}
									</LanguageContextConsumer>
									{/* </a> */}
								</nav>
							</div>
						</section>
						<ThemeSelector />
					</header>

					<main className='section-main'>
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
					<ThemeSelector />
				</header>

				<main className='section-main'>
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

export default NoteAppWrapper;
