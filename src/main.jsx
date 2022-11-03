import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import NoteApp from './NoteApp';
import {LanguageProvider} from './context/LanguageContext';
import {ThemeProvider} from './context/ThemeContext';

import './styles/style.scss';

const root = createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<LanguageProvider>
			<ThemeProvider>
				<NoteApp />
			</ThemeProvider>
		</LanguageProvider>
	</BrowserRouter>
);
