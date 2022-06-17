import React, { FC } from 'react';
import styled from 'styled-components';
import { questions } from '../../data/placementTestData';
import BackDecoration from './BackDecoration';
import QuestionBlock from './QuestionBlock';
import { MdArrowRightAlt } from 'react-icons/md';

interface PlacementInterface {
	testLevel: string;
	changeStage: (val: string) => void;
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

const PlacementTest: FC<PlacementInterface> = ({ testLevel, changeStage }) => {
	return (
		<Container>
			<BackDecoration />
			{questions[testLevel].map((el) => (
				<QuestionBlock key={el.id} element={el} />
			))}

			<Button
				onClick={() => {
					window.scrollTo({
						top: 0,
						behavior: 'smooth',
					});
					changeStage('testFinish');
				}}
			>
				Finish <MdArrowRightAlt />
			</Button>
		</Container>
	);
};

export default PlacementTest;
