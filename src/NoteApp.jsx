import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
import StarterPage from './pages/StarterPage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import PageNotFound from './components/PageNotFound';

const NoteApp = () => {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<main>
				<Routes>
					<Route exact path='/' element={<StarterPage />} />
					<Route path='/add' element={<AddPage />} />
					<Route path='/notes/:id' element={<DetailPage />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
			</main>
		</>
	);
};

export default NoteApp;
