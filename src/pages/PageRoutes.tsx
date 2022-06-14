import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Guide from './Guide';
import Home from './Home';

const PageRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/Home" element={<Home />} />
			<Route path="/Guide" element={<Guide />} />

			<Route path="*" element={<Navigate to="/Home" />} />
		</Routes>
	);
};

export default PageRoutes;
