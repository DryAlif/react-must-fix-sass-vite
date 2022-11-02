import React, { useReducer, useState, useEffect } from 'react';

const ThemeContext = React.createContext();

const ThemeContextProvider = ThemeContext.Provider;

const themeReducer = (state, action) => {
	switch (action.type) {
		case 'CHANGE_THEME':
			localStorage.setItem('theme', action.payload);
			return { ...state, themeMode: action.payload };
		default:
			return state;
	}
};

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

	useEffect(() => {
		if (localStorage.getItem('theme')) {
			setTheme(localStorage.getItem('theme'));
		}
	}, []);

	const [state, dispatch] = useReducer(themeReducer, {
		themeMode: theme
	});

	const changeTheme = themeMode => {
		dispatch({ type: 'CHANGE_THEME', payload: themeMode });
	};

	return <ThemeContextProvider value={{ ...state, changeTheme }}>{children}</ThemeContextProvider>;
}

export default ThemeContext;
