import React, { FC, useEffect } from 'react';
import { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { pageChange } from '../features/currentPage/currentPageSlice';
import styled from 'styled-components';
import Nav from '../components/navbar/Nav';
import Footer from '../components/Footer';
import About from '../components/About';
import LogoSection from '../components/LogoSection';
import SiteOptions from '../components/SiteOptions';

interface AboutProps {}
const Container = styled.div``;

const Home: FC<AboutProps> = () => {
	const page = useSelector((state: RootState) => state.page.value);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(pageChange('ABOUT'));
	}, []);
	return (
		<Container>
			<Nav />
			<LogoSection />
			<About />
			<SiteOptions />
			<Footer />
		</Container>
	);
};

export default Home;
