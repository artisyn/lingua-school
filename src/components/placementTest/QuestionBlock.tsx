import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { answerChange } from '../../features/placementTestAnswers/PlacementSlice';

interface QuestionInterface {
	element: {
		id: number;
		question: string;
		a: string;
		b: string;
		c: string;
		d?: string;
		correct: string;
	};
}
interface BoxInterface {
	boxSelected: string;
}

interface ContainerInterface {
	theme: string;
}

const Container = styled.div<ContainerInterface>`
	z-index: 21;

	background-color: ${(props) =>
		props.theme === 'light' ? '#fcf6f6c5' : '#262626'};
	color: ${(props) => (props.theme === 'light' ? '#262626' : '#fcf6f6c5')};
	flex: 1;
	border: 2px solid #f7d571;
	border-radius: 21% 79% 19% 81% / 80% 18% 82% 20%;
	width: 30rem;
	padding: 3rem;

	display: flex;
	flex-direction: column;
	align-items: left;
	justify-content: center;
	gap: 0.5rem;

	@media only screen and (max-width: 800px) {
		width: 95vw;
	} ;
`;
const QuestionNumber = styled.div``;
const QuestionText = styled.p`
	font-size: 1.4rem;
	font-weight: 500;
	@media only screen and (max-width: 800px) {
		font-size: 1.2rem;
		font-weight: 500;
	} ;
`;
const AnswerContainer = styled.div`
	cursor: pointer;
	font-size: 1.3rem;
	font-weight: 400;

	display: flex;
	gap: 0.5rem;
	&:hover {
		background-color: #f7d67161;
	}
`;
const Box = styled.div<BoxInterface>`
	width: 1.7rem;
	height: 1.7rem;
	border-radius: 0.2rem;
	border: 2px solid #f7d571;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.boxSelected};
	padding: 0.3rem;
`;

const QuestionBlock: FC<QuestionInterface> = ({ element }) => {
	const [answer, setAnswer] = useState<string>('');

	const theme = useSelector((state: RootState) => state.theme.value);
	const placementAnswers = useSelector(
		(state: RootState) => state.placementAnswers.value
	);

	const dispatch = useDispatch();
	const handleAnswerChange = (id: number, val: string): void => {
		const updatedAnswers = { ...placementAnswers };
		updatedAnswers[id] = val;
		dispatch(answerChange(updatedAnswers));
	};
	const handleClick = (val: string): void => {
		setAnswer(val);
		handleAnswerChange(element.id, val);
	};

	return (
		<Container theme={theme}>
			<QuestionNumber>Question No. {element.id}</QuestionNumber>
			<QuestionText>{element.question}</QuestionText>
			<AnswerContainer
				onClick={() => {
					handleClick('A');
				}}
			>
				<Box boxSelected={answer === 'A' ? '#efa34c' : ''}>A</Box>
				{element.a}
			</AnswerContainer>
			<AnswerContainer
				onClick={() => {
					handleClick('B');
				}}
			>
				<Box boxSelected={answer === 'B' ? '#efa34c' : ''}>B</Box>
				{element.b}
			</AnswerContainer>
			<AnswerContainer
				onClick={() => {
					handleClick('C');
				}}
			>
				<Box boxSelected={answer === 'C' ? '#efa34c' : ''}>C</Box>
				{element.c}
			</AnswerContainer>
			{element.d ? (
				<AnswerContainer
					onClick={() => {
						handleClick('D');
					}}
				>
					<Box boxSelected={answer === 'D' ? '#efa34c' : ''}>D</Box>
					{element.d}
				</AnswerContainer>
			) : (
				''
			)}
		</Container>
	);
};

export default QuestionBlock;
