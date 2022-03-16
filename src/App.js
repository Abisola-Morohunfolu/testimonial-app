import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import ShareYourStory from './pages/ShareYourStory/ShareYourStory';
import ThemeProviderContext from './theme/ThemeProvider';

function App() {
	return (
		<>
			<ThemeProviderContext>
				<CssBaseline />
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/share-your-story" element={<ShareYourStory />} />
				</Routes>
			</ThemeProviderContext>
		</>
	);
}

export default App;
