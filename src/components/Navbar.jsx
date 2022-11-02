import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiLogOut } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

// import './Navbar.module.scss';

const Navbar = ({ logout, name }) => {
	const { changeLocale, langSet } = useLanguage();
	const { changeTheme, themeMode } = useTheme();

	function toggleLocale() {
		changeLocale(langSet === 'ID' ? 'EN' : 'ID');
	}

	function toggleThemeMode() {
		changeTheme(themeMode === 'dark' ? 'light' : 'dark');
	}
	console.log('langSet', langSet);
	console.log('themeMode', themeMode);

	return (
		<>
			<section className='app-nav-header'>
				<div className='app-nav-header--items'>
					<h1 className='app-nav-header--items__logo'>{langSet === 'EN' ? 'Notes App' : 'Aplikasi Catatan'}</h1>
					<nav className='app-nav-header--items__link'>
						<button onClick={toggleThemeMode} className='app-nav-header--items__link-url'>
							{themeMode === 'dark' ? <FaMoon className='text-slate-50 text-xl' /> : <FaSun />}
							{themeMode === 'dark' ? document.documentElement.setAttribute('data-theme', 'dark') : <FaSun />}
						</button>

						<button onClick={toggleLocale} className='app-nav-header--items__link-url'>
							<BiWorld />
							{langSet === 'EN' ? 'EN' : 'ID'}
						</button>

						<Link to={'/'} className='app-nav-header--items__link-url'>
							<FiHome /> {langSet === 'EN' ? 'Home' : 'Beranda'}
						</Link>

						<Link to={'/archived'} className='app-nav-header--items__link-url'>
							<FiHome /> {langSet === 'EN' ? 'archived' : 'Arsip'}
						</Link>

						<Link to={'/add'} className='app-nav-header--items__link-url'>
							<FiPlusCircle /> {langSet === 'EN' ? 'Add' : 'Tambah'}
						</Link>
						<button className='app-nav-header--items__link-url' onClick={logout}>
							{name}
							<div className='horizontalgap'></div>
							{/* <img src='spacer.png' height='1px' width='5px'></img> */}
							<FiLogOut />
						</button>
					</nav>
				</div>
			</section>
		</>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired
};

export default Navbar;
