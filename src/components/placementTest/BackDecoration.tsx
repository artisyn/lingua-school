import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

interface BackInterface {
	theme: string;
}

const Container = styled.div`
	overflow: hidden;
	z-index: 1;
	position: fixed;
	top: 10rem;
	height: 100%;
	height: 80vh;
	width: 100%;
	@media only screen and (max-width: 1000px) {
		display: none;
	} ;
`;
const fall = keyframes`
from {
	top: -40rem;
}
to {
	top: 120vh;
}
`;

const morf = keyframes`
0% {
	 border-radius: 4% 96% 72% 28% / 14% 48% 52% 86%;

}
50% {
	border-radius: 24% 76% 91% 9% / 29% 17% 83% 51%;

}
100% {
	border-radius: 4% 96% 72% 28% / 14% 48% 52% 86%;

}

`;

const BackElement1 = styled.div<BackInterface>`
	position: absolute;
	top: -20rem;
	left: 10%;
	width: 20%;
	height: 30%;
	border-radius: 4% 96% 72% 28% / 14% 48% 52% 86%;
	background: linear-gradient(
		${(props) =>
			props.theme === 'light'
				? 'to bottom, #fcf2d5,#fcf5de,#fcf8e6,#fdfaef,#fefdf7'
				: 'to bottom, #2b2b2b, #2f2f2f, #323232, #363636, #3a3a3a'}
	);
	animation: ${morf} 5s ease infinite, ${fall} 30s ease infinite;
`;
const BackElement2 = styled.div<BackInterface>`
	margin-top: 20vh;
	position: absolute;
	top: -40rem;
	right: 5%;
	width: 30%;
	height: 35%;
	border-radius: 24% 76% 91% 9% / 29% 17% 83% 71%;
	background: linear-gradient(
		${(props) =>
			props.theme === 'light'
				? 'to bottom, #fcf2d5,#fcf5de,#fcf8e6,#fdfaef,#fefdf7'
				: 'to bottom, #2b2b2b, #2f2f2f, #323232, #363636, #3a3a3a'}
	);
	animation: ${morf} 6s ease infinite, ${fall} 20s ease infinite;
`;

const BackDecoration: FC = () => {
	const theme = useSelector((state: RootState) => state.theme.value);
	return (
		<Container>
			<BackElement1 theme={theme} />
			<BackElement2 theme={theme} />
		</Container>
	);
};

export default BackDecoration;
