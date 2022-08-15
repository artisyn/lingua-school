import React, { FC, useEffect, useState } from 'react';
import Idiom from './Idiom';
import styled from 'styled-components';
import { idioms } from '../../data/bodyIdiomsData';
import { MdArrowRightAlt } from 'react-icons/md';
import Confetti from '../confetti/Confetti';

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
	border-radius: 5px;
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
const IntroContainer = styled.div`
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Rules = styled.p`
	font-size: 1.4rem;
	font-weight: 500;
	padding: 0.5rem;
`;
const Colors = styled.div``;
const Box1 = styled.div`
	width: 2rem;
	height: 2rem;
	border-radius: 4px;
	background-color: #f8776d;
`;
const Box2 = styled.div`
	width: 2rem;
	height: 2rem;
	border-radius: 4px;
	background-color: #fea141;
`;
const ColorsItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
`;
const ResultsBox = styled.div`
	border: 2px solid #f7d571;
	border-radius: 1rem;
	min-width: 16rem;
	padding: 2rem;
	font-size: 1.3rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const ResultScore = styled.div``;
const ResultNumber = styled.span`
	font-weight: bold;
`;
const ResultMessage = styled.div`
	font-weight: 500;
	font-style: italic;
	letter-spacing: 0.05rem;
`;

const BodyIdioms: FC = () => {
	const [quizStage, setQuizStage] = useState<string>('quizStart');
	const handleClick = (): void => {
		setQuizStage('ssss');
		setCorrect(0);
		setMessage('');
		setTotal(20);
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		setTimeout(() => {
			setQuizStage('quizStart');
		}, 100);
	};
	const [correct, setCorrect] = useState<number>(0);
	const [total, setTotal] = useState<number>(20);
	const [message, setMessage] = useState<string>('');
	const updateCorrect = (): void => {
		setCorrect(correct + 1);
	};
	const updateTotal = (): void => {
		setTotal(total - 1);
	};
	const calculateResults = (totalQuestions: number): void => {
		const persentage = (correct * 100) / totalQuestions;

		if (persentage <= 100 && persentage >= 91)
			setMessage(
				'Congratulations! You are a dab hand at English idioms! 🏆'
			);
		if (persentage <= 90 && persentage >= 61)
			setMessage('Well done! You are a hotshot! 😄');
		if (persentage <= 60 && persentage >= 31)
			setMessage('Not bad, so keep up the good work! 🙂');
		if (persentage <= 30 && persentage >= 0)
			setMessage('Cheer up! Next time you might do better! 😉');
	};
	useEffect(() => {
		if (total === 0) calculateResults(20);
	}, [total]);
	return (
		<Container>
			{total === 0 ? <Confetti /> : ''}
			<IntroContainer>
				<Rules>
					Click on the right body part to complete the idiom in each
					sentence.
				</Rules>
				<Colors>
					<ColorsItem>
						<Box1></Box1> <Rules>Answer is incorrect</Rules>
					</ColorsItem>
					<ColorsItem>
						<Box2></Box2> <Rules>Answer is correct</Rules>
					</ColorsItem>
				</Colors>
			</IntroContainer>
			{quizStage === 'quizStart' ? (
				<Wrapper>
					{idioms.map((el, i) => (
						<Idiom
							key={i}
							element={el}
							updateCorrect={updateCorrect}
							updateTotal={updateTotal}
						/>
					))}
					{total === 0 ? (
						<Wrapper>
							<ResultsBox>
								<ResultScore>
									Total Correct Answers -{' '}
									<ResultNumber>
										{correct} / 20 (
										{((correct * 100) / 20).toFixed()}%)
									</ResultNumber>
								</ResultScore>
								<ResultMessage>{message}</ResultMessage>
							</ResultsBox>
						</Wrapper>
					) : (
						<Wrapper>
							Complete all questions to see your score
						</Wrapper>
					)}
					<Button onClick={handleClick}>
						Retry <MdArrowRightAlt />
					</Button>
				</Wrapper>
			) : (
				''
			)}
			{quizStage === 'quizFinish' ? '' : ''}
		</Container>
	);
};

export default BodyIdioms;
