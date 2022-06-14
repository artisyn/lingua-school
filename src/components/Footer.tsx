import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	min-height: 20vh;
	background: linear-gradient(
		to bottom,
		#2d2f3c,
		#323543,
		#373b49,
		#3c4250,
		#414857
	);
	overflow: hidden;
	border-top-left-radius: 50%;
	border-top-right-radius: 20%;
`;
interface FooterProps {}

const Footer: FC<FooterProps> = () => {
	return <Container>This is footer</Container>;
};

export default Footer;
