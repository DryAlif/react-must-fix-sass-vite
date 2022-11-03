import React, {useEffect, useReducer, useState} from 'react';

const LanguageContext = React.createContext();

const LanguageContextProvider = LanguageContext.Provider;

export const LanguageContextConsumer = LanguageContext.Consumer;

const langReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_LOCALE':
			localStorage.setItem('localeLang', action.payload);
			return { ...state, langSet: action.payload };
		default:
			return state;
	}
};

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState(localStorage.getItem('localeLang') || 'ID');

	useEffect(() => {
		if (localStorage.getItem('localeLang')) {
			setLanguage(localStorage.getItem('localeLang'));
		}
	}, []);

	const [state, dispatch] = useReducer(langReducer, { langSet: language });

	const changeLocale = langSet => {
		dispatch({ type: 'CHANGE_LOCALE', payload: langSet });
	};

	return <LanguageContextProvider value={{ ...state, changeLocale }}>{children}</LanguageContextProvider>;
}

export default LanguageContext;
