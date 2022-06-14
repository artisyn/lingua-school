import React, { FC } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import GuideText from '../components/GuideText';
import Nav from '../components/navbar/Nav';

interface GuideProps {}

const Container = styled.div``;
const Guide: FC<GuideProps> = () => {
	return (
		<Container>
			<Nav />
			<GuideText />
			<Footer />
		</Container>
	);
};

export default Guide;
