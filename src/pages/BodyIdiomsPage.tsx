import React, { FC, useEffect } from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { pageChange } from '../features/currentPage/currentPageSlice';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LogoSection from '../components/LogoSection';
import Nav from '../components/navbar/Nav';
import BodyIdioms from '../components/bodyIdioms/BodyIdioms';

const Container = styled.div``;

const BodyIdiomsPage: FC = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(pageChange('BODY IDIOMS'));
	}, []);
	return (
		<Container>
			<Nav />
			<LogoSection />
			<BodyIdioms />
			<Footer />
		</Container>
	);
};

export default BodyIdiomsPage;
