import { createTheme, ThemeProvider } from '@mui/material';

export const theme = createTheme({
	typography: {
		body1: {
			fontFamily: "'Inter', san-serif",
		},
	},
});

const ThemeProviderContext = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderContext;
