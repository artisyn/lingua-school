import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { idioms } from '../../data/animalIdiomsData';
import Idiom from './Idiom';
import { MdArrowRightAlt } from 'react-icons/md';

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
const Button = styled.button`
	z-index: 5;
	margin-top: 2rem;
	color: white;
	outline: none;
	border: none;
	border-radius: 1rem;
	padding: 0.4rem;
	font-size: 1.2rem;
	font-weight: bold;
	width: 12rem;
	height: 3rem;
	background-color: #efa34b;
	text-align: left;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	transition: all ease 0.4s;
	&:hover {
		background-color: #efa24bc4;
	}
`;
const AnimalIdioms: FC = () => {
	const [quizStage, setQuizStage] = useState<string>('quizStart');
	return (
		<Container>
			{quizStage === 'quizStart' ? (
				<Wrapper>
					{idioms.map((el, i) => (
						<Idiom key={i} element={el} />
					))}
					<Button>
						Retry <MdArrowRightAlt />{' '}
					</Button>
				</Wrapper>
			) : (
				''
			)}
			{quizStage === 'quizFinish' ? '' : ''}
		</Container>
	);
};

export default AnimalIdioms;
