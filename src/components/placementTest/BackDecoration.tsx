import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
	overflow: hidden;
	border: 2px solid white;
	z-index: 1;
	position: fixed;
	top: 10rem;
	height: 100%;
	height: 80vh;
	width: 100%;
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

const BackElement1 = styled.div`
	position: absolute;
	top: -20rem;
	left: 10%;
	width: 20%;
	height: 30%;
	border-radius: 4% 96% 72% 28% / 14% 48% 52% 86%;
	background: linear-gradient(
		to bottom,
		#fcf2d5,
		#fcf5de,
		#fcf8e6,
		#fdfaef,
		#fefdf7
	);
	animation: ${morf} 8s ease infinite, ${fall} 60s ease infinite;
`;
const BackElement2 = styled.div`
	margin-top: 20vh;
	position: absolute;
	top: -40rem;
	right: 5%;
	width: 30%;
	height: 35%;
	border-radius: 24% 76% 91% 9% / 29% 17% 83% 71%;
	background: linear-gradient(
		to bottom,
		#fcf2d5,
		#fcf5de,
		#fcf8e6,
		#fdfaef,
		#fefdf7
	);
	animation: ${morf} 6s ease infinite, ${fall} 40s ease infinite;
`;

const BackDecoration: FC = () => {
	return (
		<Container>
			<BackElement1 />
			<BackElement2 />
		</Container>
	);
};

export default BackDecoration;
