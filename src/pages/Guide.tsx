import React, { FC, useEffect } from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { pageChange } from '../features/currentPage/currentPageSlice';
import styled from 'styled-components';
import Footer from '../components/Footer';
import GuideText from '../components/GuideText';
import LogoSection from '../components/LogoSection';
import Nav from '../components/navbar/Nav';

interface GuideProps {}

const Container = styled.div``;
const Guide: FC<GuideProps> = () => {
	const page = useSelector((state: RootState) => state.page.value);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(pageChange('GUIDE'));
	}, []);
	return (
		<Container>
			<Nav />
			<LogoSection />
			<GuideText />
			<Footer />
		</Container>
	);
};

export default Guide;
