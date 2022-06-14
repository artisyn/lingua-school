import React, { FC } from 'react';
import styled from 'styled-components';
import logo from '../../src/logo.png';
const Container = styled.div`
	overflow: hidden;
	border-bottom-left-radius: 50%;
	border-bottom-right-radius: 20%;
	height: 40vh;
	background: linear-gradient(
		to right,
		#fe9e3f,
		#ffac46,
		#ffba4f,
		#ffc85a,
		#ffd566
	);
`;
const LogoContainer = styled.div`
	border-bottom-left-radius: 30%;
	border-bottom-right-radius: 10%;
	position: relative;
	left: 1rem;
	overflow: hidden;
	width: 8rem;
	height: 8rem;
`;
const Image = styled.img`
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

const LogoSection: FC = () => {
	return (
		<Container>
			<LogoContainer>
				<Image src={logo} alt="company logo" />
			</LogoContainer>
		</Container>
	);
};

export default LogoSection;
