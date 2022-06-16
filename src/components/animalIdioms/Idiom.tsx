import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { idiomsCorrectAnswers } from '../../data/animalIdiomsData';

interface IdiomInterface {
	element: {
		idiom: string;
		definition: string;
		question: string;
		a: string;
		b: string;
		c: string;
		d: string;
		correct: string;
	};
}

interface Box {
	boxSelected: string;
	onClick: (val: string) => void;
}

const Container = styled.div`
	border: 1px solid black;
	z-index: 21;

	background-color: ${(props) =>
		props.theme === 'light' ? '#fcf6f6c5' : '#262626'};
	color: ${(props) => (props.theme === 'light' ? '#262626' : '#fcf6f6c5')};
	flex: 1;
	border: 2px solid #f7d571;
	border-radius: 21% 79% 19% 81% / 80% 18% 82% 20%;
	width: 40rem;
	padding: 5rem;

	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
	gap: 1rem;
`;
const Question = styled.p`
	font-size: 1.3rem;
	font-weight: 500;
`;

const AnswerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	gap: 1rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
`;
const AnswerBlock = styled.div<Box>`
	font-size: 1.2rem;
	font-weight: 500;
	border: 2px solid #f7d571;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	transition: all ease 0.4s;
	background-color: ${(props) => props.boxSelected};
	&:hover {
		background-color: #f7d67161;
	}
`;

const Idiom: FC<IdiomInterface> = ({ element }) => {
	const theme = useSelector((state: RootState) => state.theme.value);
	const [userAnswer, setUserAnswer] = useState<string>('');
	const [pickEnd, setPickEnd] = useState<boolean>(false);

	const handleClick = (val: string): void => {
		setUserAnswer(val);
		setPickEnd(true);

		if (val === element.correct) {
		}
		if (val !== element.correct) {
			//lost
		}
	};
	return (
		<Container theme={theme}>
			<Question>{element.question}</Question>
			<AnswerContainer>
				<AnswerBlock
					boxSelected={
						element.a === element.correct && pickEnd ? 'green' : ''
					}
					onClick={() => {
						handleClick(element.a);
					}}
				>
					{element.a}
				</AnswerBlock>
				<AnswerBlock
					boxSelected={
						element.b === element.correct && pickEnd ? 'green' : ''
					}
					onClick={() => {
						handleClick(element.b);
					}}
				>
					{element.b}
				</AnswerBlock>
				<AnswerBlock
					boxSelected={
						element.c === element.correct && pickEnd ? 'green' : ''
					}
					onClick={() => {
						handleClick(element.c);
					}}
				>
					{element.c}
				</AnswerBlock>
				<AnswerBlock
					boxSelected={
						element.d === element.correct && pickEnd ? 'green' : ''
					}
					onClick={() => {
						handleClick(element.d);
					}}
				>
					{element.d}
				</AnswerBlock>
			</AnswerContainer>
		</Container>
	);
};

export default Idiom;
