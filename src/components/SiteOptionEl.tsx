import React, { FC } from 'react';
import styled from 'styled-components';

interface SiteOptionInterface {
	children?: React.ReactNode;
}

const Container = styled.div`
	flex: 1;
	width: 11rem;
	height: 11rem;
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Frame = styled.div`
	border-radius: 30% 70% 28% 72% / 60% 34% 66% 40%;
	background-color: #fee4bf;
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
`;

const SiteOptionEl: FC<SiteOptionInterface> = ({ children }) => {
	return (
		<Container>
			<Frame></Frame>
			{children}
		</Container>
	);
};

export default SiteOptionEl;
