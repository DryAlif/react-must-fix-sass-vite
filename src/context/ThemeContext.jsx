import React, {useEffect, useReducer, useState} from 'react';

const ThemeContext = React.createContext();

const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;

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
			//<nav className={`${styles.nav} ${styles[theme]}`}>
			if (theme === 'light') {
				document.body.style.backgroundColor = `#f9f3f3`;
			} else {
				document.body.style.backgroundColor = `#1a1b1e`;
			}
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
