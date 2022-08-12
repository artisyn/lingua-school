import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AnimalIdiomsPage from './AnimalIdiomsPage';
import BodyIdiomsPage from './BodyIdiomsPage';
import ColorIdiomsPage from './ColorIdiomsPage';
import Guide from './Guide';
import Home from './Home';
import PlacementTestPage from './PlacementTestPage';

const PageRoutes: FC = () => {
	return (
		<Routes>
			<Route path="/Home" element={<Home />} />
			<Route path="/Guide" element={<Guide />} />
			<Route path="/Placement-test" element={<PlacementTestPage />} />
			<Route path="/Animal-idioms" element={<AnimalIdiomsPage />} />
			<Route path="/Color-idioms" element={<ColorIdiomsPage />} />
			<Route path="/Body-idioms" element={<BodyIdiomsPage />} />

			<Route path="*" element={<Navigate to="/Home" />} />
		</Routes>
	);
};

export default PageRoutes;
