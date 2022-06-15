import React, { FC, useEffect } from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { pageChange } from '../features/currentPage/currentPageSlice';
import styled from 'styled-components';
import Footer from '../components/Footer';
import LogoSection from '../components/LogoSection';
import Nav from '../components/navbar/Nav';

const Container = styled.div``;

const AnimalIdiomsPage: FC = () => {
	const page = useSelector((state: RootState) => state.page.value);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(pageChange('ANIMAL IDIOMS'));
	}, []);
	return (
		<Container>
			<Nav />
			<LogoSection />
			<Footer />
		</Container>
	);
};

export default AnimalIdiomsPage;
