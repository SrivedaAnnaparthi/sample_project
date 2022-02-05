import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

//import Router from './routes';

const App = () => {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
				<Route path="/home" element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default App;
