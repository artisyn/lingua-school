import React, { FC } from 'react';
import styled from 'styled-components';
import { MdArrowRightAlt } from 'react-icons/md';

interface TestLevelInterface {
	setLevel: (val: string) => void;
	levelValue: string;
	changeStage: (val: string) => void;
}

interface CheckboxInterface {
	checkboxed: string;
}

const Container = styled.div`
	margin: 2rem auto;
	padding: 1rem;
	max-width: 35rem;
	min-height: 60vh;
	display: flex;
	align-items: left;
	justify-content: flex-start;
	gap: 1rem;
	flex-direction: column;
`;

const Title = styled.h2`
	margin-bottom: 2rem;
`;
const Explanation = styled.p`
	width: 100%;
	font-size: 1.2rem;
	font-weight: 500;
`;
const SelectorContainer = styled.div`
	width: 20rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: left;
`;
const Label = styled.label`
	cursor: pointer;
	width: 100%;
	font-size: 1.3rem;
	display: flex;
	align-items: center;
	gap: 1rem;
`;
const Selector = styled.input`
	display: none;
`;

const MaskingDiv = styled.div<CheckboxInterface>`
	height: 1.3rem;
	width: 1.3rem;
	border: 2px solid lightblue;
	border-radius: 0.2rem;
	cursor: pointer;

	background-color: ${(props) => props.checkboxed};
`;
const Bold = styled.span`
	font-size: 1.3rem;
	font-weight: bold;
`;

const Button = styled.button`
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

const TestLevel: FC<TestLevelInterface> = ({
	setLevel,
	levelValue,
	changeStage,
}) => {
	return (
		<Container>
			<Title>Please Select Test Level</Title>
			<Explanation>
				If your level is below Pre-Intermediate, choose option
				<Bold> A </Bold>
			</Explanation>
			<Explanation>
				If your level is above Pre-Intermediate, choose option
				<Bold> B </Bold>
			</Explanation>

			<SelectorContainer>
				<Label htmlFor={'aaa'}>
					Level<Bold>A</Bold> Test (50 Questions)
				</Label>
				<MaskingDiv
					onClick={() => {
						setLevel('A');
					}}
					checkboxed={levelValue === 'A' ? '#efa34c' : ''}
				>
					<Selector
						type={'radio'}
						value={'A'}
						id="aaa"
						name="level"
						checked={levelValue === 'A'}
						onChange={(e) => {
							setLevel(e.target.value);
						}}
					/>
				</MaskingDiv>
			</SelectorContainer>
			<SelectorContainer>
				<Label htmlFor="bbb">
					Level <Bold>B</Bold> Test (100 Questions)
				</Label>
				<MaskingDiv
					onClick={() => {
						setLevel('B');
					}}
					checkboxed={levelValue === 'B' ? '#efa34c' : ''}
				>
					<Selector
						type={'radio'}
						value={'B'}
						id="bbb"
						name="level"
						checked={levelValue === 'B'}
						onChange={(e) => {
							setLevel(e.target.value);
						}}
					/>
				</MaskingDiv>
			</SelectorContainer>
			{levelValue === 'A' || levelValue === 'B' ? (
				<Button
					onClick={() => {
						changeStage('testStart');
					}}
				>
					Start Test <MdArrowRightAlt />
				</Button>
			) : (
				''
			)}
		</Container>
	);
};

export default TestLevel;
