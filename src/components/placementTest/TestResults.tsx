import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { initialState } from '../../features/placementTestAnswers/PlacementSlice';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { reset } from '../../features/placementTestAnswers/PlacementSlice';
import { questions, answersEvaluation } from '../../data/placementTestData';
import { objectTraps } from 'immer/dist/internal';
import { MdArrowRightAlt } from 'react-icons/md';
import { FiCopy } from 'react-icons/fi';
import logo from '../../results.png';

interface ResultsInterface {
	testLevel: string;
	changeStage: (el: string) => void;
}
interface FuncStr {
	(num: number): string;
}

const Container = styled.div`
	position: relative;
	padding: 3rem;
	min-height: 60vh;
	display: flex;
	align-items: center;
	flex-direction: column;
`;
const Image = styled.img`
	z-index: 1;
	position: absolute;
	right: 10%;
	max-width: 20rem;
	@media only screen and (max-width: 1000px) {
		display: none;
	} ;
`;

const Title = styled.h1`
	margin-bottom: 2rem;
	z-index: 5;
`;
const ResultsContainer = styled.div`
	background-color: ${(props) =>
		props.theme === 'light' ? '#fcf6f6c5' : '#262626'};
	color: ${(props) => (props.theme === 'light' ? '#262626' : '#fcf6f6c5')};
	z-index: 5;
	border: 2px solid #f7d571;
	border-radius: 21% 79% 19% 81% / 80% 18% 82% 20%;
	width: 35rem;
	padding: 5rem;
	@media only screen and (max-width: 800px) {
		width: 95vw;
		max-width: 500px;
	}
	@media only screen and (max-width: 550px) {
		border: none;
		padding: 1rem;
	} ;
`;
const ResultElement = styled.div`
	z-index: 5;
	border: 2px solid #f7d571;
	border-radius: 21% 79% 19% 81% / 80% 18% 82% 20%;
	width: 25rem;
	padding: 2rem;
	font-size: 1.3rem;
	font-weight: bold;
	font-style: italic;
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;
	@media only screen and (max-width: 800px) {
		width: 95%;
	}
	@media only screen and (max-width: 550px) {
		width: 100%;
		border-radius: 4px;
		padding: 0.5rem;
	} ;
`;
const ResultElementFinal = styled.div`
	z-index: 5;
	border: 2px solid #f7d571;
	border-radius: 21% 79% 19% 81% / 80% 18% 82% 20%;
	width: 25rem;
	padding: 4rem;
	font-size: 1.3rem;
	font-weight: bold;
	font-style: italic;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	@media only screen and (max-width: 800px) {
		width: 95%;
	}
	@media only screen and (max-width: 5500px) {
		width: 100%;
		border-radius: 4px;
		padding: 0.5rem;
	} ;
`;
const BoldElement = styled.div`
	width: fit-content;
	padding: 0.5rem;
	min-height: 2rem;
	font-size: 1.4rem;
	border: 2px solid #f7d571;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const AnswerUnit = styled.span`
	font-size: 1rem;
`;
const AnswersContainer = styled.div``;

const CopyContainer = styled.div`
	float: right;
	margin-top: 1rem;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border: 2px solid #f7d571;
	width: 8rem;
	border-radius: 0.5rem;
	padding: 1rem;
	font-size: 1.2rem;
	transition: all ease 0.4s;
	&:hover {
		color: #f7d571;
	}
`;
const AgainButton = styled.button`
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

const TestResults: FC<ResultsInterface> = ({ testLevel, changeStage }) => {
	const theme = useSelector((state: RootState) => state.theme.value);
	const [totalCorrect, setTotalCorrect] = useState<number>(0);
	const [userLevel, setUserLevel] = useState('');
	const placementAnswers = useSelector(
		(state: RootState) => state.placementAnswers.value
	);

	/// Evaluation Logic
	const determineUsersLevel = (num: number): string => {
		if (num >= 0 && num <= 20) return 'Below Elementary';
		if (num >= 21 && num <= 35) return 'Elementary';
		if (num >= 36 && num <= 60) return 'Pre-intermediate';
		if (num >= 61 && num <= 85) return 'Intermediate';
		if (num >= 86 && num <= 100) return 'Upper Intermediate';
		return '';
	};

	const handleResults = () => {
		const userAnswers = { ...placementAnswers };
		const correct = [...questions[testLevel]];
		const evaluation = { ...answersEvaluation };

		const totalCorrectans: number = questions[testLevel].reduce(
			(accu, el, i) => {
				if (userAnswers[i + 1].toLowerCase() === el.correct)
					return accu + 1;
				return accu;
			},
			0
		);
		setTotalCorrect(totalCorrectans);
		const userLevel = determineUsersLevel(totalCorrect);

		setUserLevel(userLevel);
	};

	const dispatch = useDispatch();

	useEffect(() => {
		handleResults();
	}, []);

	const CopyResults = async () => {
		let answ: string = '';
		Object.entries(placementAnswers).forEach((el) => {
			const str1 = `${el[0]} / [${el[1] ? el[1] : ''}] ,`;
			answ += str1;
		});

		let str: string = `
        Test Level: ${testLevel}
        Total Correct Answers: ${totalCorrect}
        Language Level: ${userLevel} 
        Students Answers: ${answ}
		`;

		await navigator.clipboard
			.writeText(str)
			.then((el) => alert('Copied to Clipboard !'));
	};
	const handleTryAgain = () => {
		changeStage('testLevel');
		dispatch(reset());
	};

	return (
		<Container>
			<Image src={logo} />
			<Title>YOUR TEST RESULTS:</Title>

			<ResultsContainer theme={theme}>
				<ResultElement>
					Test Level: <BoldElement>{testLevel}</BoldElement>
				</ResultElement>
				<ResultElement>
					Total Correct Answers:
					<BoldElement>{totalCorrect}</BoldElement>
				</ResultElement>
				<ResultElement>
					Your Language level: <BoldElement>{userLevel}</BoldElement>
				</ResultElement>
				<ResultElementFinal>
					Your Answers:
					<AnswersContainer>
						{Object.entries(placementAnswers).map((el, i) => (
							<AnswerUnit key={i}>
								{' '}
								{`${el[0]} / ${el[1]}`}
							</AnswerUnit>
						))}
					</AnswersContainer>
				</ResultElementFinal>
				<CopyContainer
					onClick={() => {
						CopyResults();
					}}
				>
					Copy <FiCopy />
				</CopyContainer>
			</ResultsContainer>
			<AgainButton
				onClick={() => {
					handleTryAgain();
				}}
			>
				Try Again <MdArrowRightAlt />
			</AgainButton>
		</Container>
	);
};

export default TestResults;
