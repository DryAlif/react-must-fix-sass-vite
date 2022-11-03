import React from 'react';
import PropTypes from 'prop-types';

// Custom Hooks
import { useLanguage } from '../hooks/useLanguage';

const SearchSection = ({ searchKeyword, searchHandler }) => {
	const { langSet } = useLanguage();

	return (
		<section className='project-search'>
			<article id='input-search-section' className='input-search-section'>
				<div className='form__title'>{langSet === 'EN' ? 'Find Notes' : 'Cari Catatan'}</div>

				<form id='form-search' className='form-search'>
					<div className='form__item'>
						<input id='searchBookTitle' type='text' className='form__input' placeholder={langSet === 'EN' ? 'Type Notes Title here ... ' : 'Ketik Judul Catatan ... '} value={searchKeyword} onChange={event => searchHandler(event.target.value)} />
						<span className='form__error'></span>
					</div>
				</form>
			</article>
		</section>
	);
};

SearchSection.propTypes = {
	searchKeyword: PropTypes.string.isRequired,
	searchHandler: PropTypes.func.isRequired
};

export default SearchSection;
