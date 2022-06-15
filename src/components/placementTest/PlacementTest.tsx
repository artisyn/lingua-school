import React, { FC } from 'react';
import styled from 'styled-components';
import { questions } from '../../data/placementTestData';
import BackDecoration from './BackDecoration';
import QuestionBlock from './QuestionBlock';

interface PlacementInterface {
	testLevel: string;
}

const Container = styled.div`
	position: relative;
	padding: 2rem 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	min-height: 60vh;
`;

const PlacementTest: FC<PlacementInterface> = ({ testLevel }) => {
	return (
		<Container>
			<BackDecoration />
			{questions[testLevel].map((el) => (
				<QuestionBlock key={el.id} element={el} />
			))}
		</Container>
	);
};

export default PlacementTest;
