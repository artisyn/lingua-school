import React, { FC } from 'react';
import styled from 'styled-components';
import { CgDanger } from 'react-icons/cg';

interface GuiteTextProps {}

const Container = styled.div`
	min-height: 50vh;
	font-size: 1.3rem;
	padding: 2rem 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
`;
const Title = styled.h1`
	text-align: center;
`;
const Paragraph = styled.p`
	line-height: 2rem;
	max-width: 40rem;
	letter-spacing: 0.04rem;
`;
const Logo = styled.span`
	font-size: 1.3rem;
	font-weight: bold;
	margin-right: 0.5rem;
	font-size: 2rem;
	vertical-align: middle;
`;

const GuideText: FC<GuiteTextProps> = () => {
	return (
		<Container>
			<Title>Placement Test Guide</Title>

			<Paragraph>
				Our Placement test is divided into two parts. If you think that
				you know only a bit more than just the basics, you don't have to
				waste your time on the whole test and should only do Level A
				Test, which contains 50 questions.
			</Paragraph>
			<Paragraph>
				However, if you suspect that your level exceeds
				Pre-Intermediate, then we recommend doing Level B Test which has
				100 questions in it.
			</Paragraph>

			<Paragraph>
				<Logo>
					<CgDanger />
				</Logo>
				To get a more reliable interpretation of the results please DO
				NOT tick any option randomly and just leave it blank.
			</Paragraph>

			<Paragraph>
				As soon as you finish the test you will have an option to send
				it to our teachers who you can contact and ask for advice
				regarding improving your English, choosing the relevant course
				or textbooks, etc.
			</Paragraph>

			<Title>Idioms Quizz Guides</Title>

			<Paragraph>There can only be ONE correct answer.</Paragraph>
			<Paragraph>
				Your answers are evaluated immediately and there is no UNDO
				button, so please think carefully before making your choice.
				Look before you leap! ;)
			</Paragraph>
		</Container>
	);
};

export default GuideText;
