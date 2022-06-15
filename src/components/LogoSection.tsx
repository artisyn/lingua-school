import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import styled from 'styled-components';
import logo from '../../src/logo.png';
const Container = styled.div`
	z-index: 9;
	position: relative;
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
const Title = styled.h1`
	width: 100%;
	color: white;
	text-align: center;
	position: absolute;
	bottom: 1.5rem;
`;

const LogoSection: FC = () => {
	const page = useSelector((state: RootState) => state.page.value);
	return (
		<Container>
			<LogoContainer>
				<Image src={logo} alt="company logo" />
			</LogoContainer>
			<Title>{page}</Title>
		</Container>
	);
};

export default LogoSection;
