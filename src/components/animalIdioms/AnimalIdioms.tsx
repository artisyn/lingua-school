import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { idioms } from '../../data/animalIdiomsData';
import Idiom from './Idiom';

const Container = styled.div`
	min-height: 60vh;
`;
const Wrapper = styled.div`
	padding: 3rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	flex-direction: column;
`;

const AnimalIdioms: FC = () => {
	const [quizStage, setQuizStage] = useState<string>('quizStart');
	return (
		<Container>
			{quizStage === 'quizStart' ? (
				<Wrapper>
					{idioms.map((el) => (
						<Idiom element={el} />
					))}
				</Wrapper>
			) : (
				''
			)}
			{quizStage === 'quizFinish' ? '' : ''}
		</Container>
	);
};

export default AnimalIdioms;
