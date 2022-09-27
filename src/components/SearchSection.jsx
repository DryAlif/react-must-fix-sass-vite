import React from 'react';
import PropTypes from 'prop-types';

const SearchSection = ({ searchKeyword, searchHandler }) => {
	return (
		<section className='project-search'>
			<article id='input-search-section' className='input-search-section'>
				<div className='form__title'>Cari Catatan</div>

				<form id='form-search' className='form-search'>
					<div className='form__item'>
						<input
							id='searchBookTitle'
							type='text'
							className='form__input'
							placeholder='Ketik Judul Catatan'
							value={searchKeyword}
							onChange={(event) => searchHandler(event.target.value)}
						/>
						<span className='form__error'></span>
					</div>
				</form>
			</article>
		</section>
	);
};

SearchSection.propType = {
	searchKeyword: PropTypes.string.isRequired,
	searchHandler: PropTypes.func.isRequired,
};

export default SearchSection;
