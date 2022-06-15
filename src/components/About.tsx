import React, { FC } from 'react';
import styled from 'styled-components';

interface AboutProps {}

const Container = styled.div`
	height: 40vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
`;
const Paragraph = styled.p`
	line-height: 2rem;
	font-size: 1.3rem;
	letter-spacing: 0.04rem;
	max-width: 40rem;
`;

const About: FC<AboutProps> = () => {
	return (
		<Container>
			<Paragraph>
				Are you planning to take an English course, but don't know where
				to begin?
			</Paragraph>
			<Paragraph>
				Our website is the right place to start the journey! Not only
				can you find out your real level of language proficiency, but
				you can also have some fun with various vocabulary tests. Enjoy!
			</Paragraph>
		</Container>
	);
};

export default About;
