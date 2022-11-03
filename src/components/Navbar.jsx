import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FiHome, FiLogOut, FiPlusCircle } from 'react-icons/fi';
import { FaRegFileArchive } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';

const Navbar = ({ logout, name }) => {
	const { changeLocale, langSet } = useLanguage();
	const { themeMode } = useTheme();

	function toggleLocale() {
		changeLocale(langSet === 'ID' ? 'EN' : 'ID');
	}

	return (
		<>
			<section className='app-nav-header'>
				<div className='app-nav-header--items'>
					<h1 className='app-nav-header--items__logo'>{langSet === 'EN' ? 'Notes App' : 'Aplikasi Catatan'}</h1>
					<nav className='app-nav-header--items__link'>
						<a onClick={toggleLocale} className='app-nav-header--items__link-url'>
							<BiWorld />
							{langSet === 'EN' ? 'EN' : 'ID'}
						</a>
						<Link to={'/'} className='app-nav-header--items__link-url'>
							<FiHome />
							&nbsp;
							{langSet === 'EN' ? 'Home' : 'Beranda'}
						</Link>
						<Link to={'/archived'} className='app-nav-header--items__link-url'>
							<FaRegFileArchive />
							&nbsp;
							{langSet === 'EN' ? 'Archived' : 'Arsip'}
						</Link>
						<Link to={'/add'} className='app-nav-header--items__link-url'>
							<FiPlusCircle />
							&nbsp;
							{langSet === 'EN' ? 'Add New Note' : 'Tambah Catatan'}
						</Link>
						<button className='app-nav-header--items__link-url' onClick={logout}>
							&nbsp;
							{name}
							<div className='horizontalgap'></div>
							{/* <img src='spacer.png' height='1px' width='5px'></img> */}
							<FiLogOut />
							&nbsp;
						</button>
						&nbsp;
					</nav>
				</div>
			</section>

			<div className='hiddenDiv'>
				{themeMode === 'dark' ? document.documentElement.setAttribute('data-theme', 'dark') : document.documentElement.setAttribute('data-theme', '')}
				{themeMode === 'dark' ? (document.body.style.backgroundColor = '#1a1b1e') : (document.body.style.backgroundColor = '#f9f3f3')}
			</div>
		</>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired
};

export default Navbar;
