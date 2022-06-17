import React, { FC, useState, useRef, RefObject } from 'react';
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
	@media only screen and (max-width: 800px) {
		width: 90vw;
		max-width: 640px;
		padding: 4rem;
	} ;
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
	@media only screen and (max-width: 800px) {
		grid-template-columns: 1fr 1fr;
	} ;
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
	/* max-width: 10rem; */
`;
const AfterBlock = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const AfterIdiom = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.2rem;
	font-style: italic;
	border: 1px solid #f7d571;
	padding: 0.3rem;
	@media only screen and (max-width: 800px) {
		flex-direction: column;
		gap: 0.5rem;
	} ;
`;
const AfterIdiomMeaning = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 1.2rem;
	font-style: italic;
	border: 1px solid #f7d571;
	padding: 0.3rem;
	@media only screen and (max-width: 800px) {
		flex-direction: column;
		gap: 0.5rem;
	} ;
`;

const BoldText = styled.div`
	font-weight: bold;
	font-style: normal;
`;

const Idiom: FC<IdiomInterface> = ({ element }) => {
	const theme = useSelector((state: RootState) => state.theme.value);
	const [userAnswer, setUserAnswer] = useState<string>('');
	const [pickEnd, setPickEnd] = useState<boolean>(false);
	const aRef = useRef<HTMLDivElement | null>(null);
	const bRef = useRef<HTMLDivElement | null>(null);
	const cRef = useRef<HTMLDivElement | null>(null);
	const dRef = useRef<HTMLDivElement | null>(null);
	const mainRef = useRef<HTMLDivElement | null>(null);

	const handleClick = (
		val: string,
		ref: null | HTMLElement,
		mainR: null | HTMLElement
	): void => {
		setUserAnswer(val);
		setPickEnd(true);

		if (val !== element.correct) {
			let x = ref;

			if (x) {
				x.style.backgroundColor = '#F8776D';
			}
		}
		let y = mainR;
		if (y) {
			y.style.pointerEvents = 'none';
		}
	};
	return (
		<Container theme={theme} ref={mainRef}>
			<Question>{element.question}</Question>
			<AnswerContainer>
				<AnswerBlock
					ref={aRef}
					boxSelected={
						element.a === element.correct && pickEnd
							? '#fea141'
							: ''
					}
					onClick={() => {
						handleClick(element.a, aRef?.current, mainRef.current);
					}}
				>
					{element.a}
				</AnswerBlock>
				<AnswerBlock
					ref={bRef}
					boxSelected={
						element.b === element.correct && pickEnd
							? '#fea141'
							: ''
					}
					onClick={() => {
						handleClick(element.b, bRef?.current, mainRef.current);
					}}
				>
					{element.b}
				</AnswerBlock>
				<AnswerBlock
					ref={cRef}
					boxSelected={
						element.c === element.correct && pickEnd
							? '#fea141'
							: ''
					}
					onClick={() => {
						handleClick(element.c, cRef?.current, mainRef.current);
					}}
				>
					{element.c}
				</AnswerBlock>
				<AnswerBlock
					ref={dRef}
					boxSelected={
						element.d === element.correct && pickEnd
							? '#fea141'
							: ''
					}
					onClick={() => {
						handleClick(element.d, dRef?.current, mainRef.current);
					}}
				>
					{element.d}
				</AnswerBlock>
			</AnswerContainer>
			{pickEnd ? (
				<AfterBlock>
					<AfterIdiom>
						<BoldText>Idiom:</BoldText> {element.idiom}
					</AfterIdiom>
					<AfterIdiomMeaning>
						<BoldText>Meaning:</BoldText> {element.definition}
					</AfterIdiomMeaning>
				</AfterBlock>
			) : (
				''
			)}
		</Container>
	);
};

export default Idiom;
