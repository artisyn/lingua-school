import React, { FC, useEffect } from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { pageChange } from '../features/currentPage/currentPageSlice';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LogoSection from '../components/LogoSection';
import Nav from '../components/navbar/Nav';
import ColorIdioms from '../components/colorIdioms/ColorIdioms';

const Container = styled.div``;

const ColorIdiomsPage: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(pageChange('COLOR IDIOMS'));
	}, []);
	return (
		<Container>
			<Nav />
			<LogoSection />
			<ColorIdioms />
			<Footer />
		</Container>
	);
};

export default ColorIdiomsPage;
