import React from 'react';
import { useTheme } from '../hooks/useTheme';
import toggleIcon from '../assets/toggle-icon.svg';

export default function ThemeSelector() {
	const { changeTheme, themeMode } = useTheme();

	const toggleMode = () => {
		changeTheme(themeMode === 'dark' ? 'light' : 'dark');
	};

	return (
		<section className='theme-selector'>
			<div className='mode-toggle'>
				<img src={toggleIcon} onClick={toggleMode} alt='toggle mode' style={{ filter: themeMode === 'dark' ? 'invert(100%)' : 'invert(20%)' }} />
			</div>
			<div className='theme-buttons'></div>
		</section>
	);
}
