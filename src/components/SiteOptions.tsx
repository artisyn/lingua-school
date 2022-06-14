import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	padding: 1rem;
	display: flex;
	gap: 3rem;
	align-items: center;
	justify-content: center;
`;

const Frame = styled.div`
	border-radius: 30% 70% 28% 72% / 60% 34% 66% 40%;
	background-color: #fee4bf;
	height: 8rem;
	width: 8rem;
`;

const SiteOptions: FC = () => {
	return (
		<Container>
			<Frame></Frame>
			<Frame></Frame>
			<Frame></Frame>
		</Container>
	);
};

export default SiteOptions;
