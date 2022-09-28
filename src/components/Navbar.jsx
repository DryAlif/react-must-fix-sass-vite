import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle } from 'react-icons/fi';

const Navbar = () => {
	return (
		<>
			<section className='app-nav-header'>
				<div className='app-nav-header--items'>
					<h1 className='app-nav-header--items__logo'>Personal Notes APP</h1>
					<nav className='app-nav-header--items__link'>
						<Link to={'/'} className='link'>
							<FiHome /> Home
						</Link>

						<Link to={'/add'}>
							<FiPlusCircle /> Add
						</Link>
					</nav>
				</div>
			</section>
		</>
	);
};

export default Navbar;
