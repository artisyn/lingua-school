import React, { FC } from 'react';
import styled from 'styled-components';
import Nav from '../components/navbar/Nav';
import Footer from '../components/Footer';
import About from '../components/About';
import LogoSection from '../components/LogoSection';
import SiteOptions from '../components/SiteOptions';

interface AboutProps {}
const Container = styled.div``;

const Home: FC<AboutProps> = () => {
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
