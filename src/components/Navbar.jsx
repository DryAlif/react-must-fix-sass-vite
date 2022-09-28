import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle } from 'react-icons/fi';

const Navbar = () => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();

	const refreshPage = () => {
		navigate(0);
	};

	const removeQueryParams = () => {
		const param = searchParams.get('keyword');

		if (param) {
			// 👇️ delete each query param
			searchParams.delete('keyword');

			// 👇️ update state after
			setSearchParams(searchParams);
			navigate('/');
			refreshPage();
		} else {
			navigate('/');
		}
	};

	return (
		<>
			<section className='app-nav-header'>
				<div className='app-nav-header--items'>
					<h1 className='app-nav-header--items__logo'>Personal Notes APP</h1>
					<nav className='app-nav-header--items__link'>
						{/* <a className='link' onClick={removeQueryParams}>
							<FiHome /> Home
						</a> */}
						{/* <Link to='/'></Link> */}
						<Link to={'/'} className='link'>
							<FiHome /> Home
						</Link>

						<Link to='/add'>
							<FiPlusCircle /> Add
						</Link>
					</nav>
				</div>
			</section>
		</>
	);
};

export default Navbar;
