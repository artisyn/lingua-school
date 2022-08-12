import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SiteOptionEl from './SiteOptionEl';
import monitor1 from '../monitor1.png';
import monitor2 from '../monitor2.png';
import { MdArrowRightAlt } from 'react-icons/md';

const Container = styled.div`
	padding: 2rem 1rem;
	display: flex;
	gap: 3rem;
	align-items: center;
	justify-content: center;
	min-height: 30vh;
	flex-wrap: wrap;
`;

const ClickableBox = styled.div`
	position: relative;
	z-index: 2;
	width: 80%;
	height: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Logo = styled.img`
	z-index: 1;
	position: absolute;
	max-height: 70%;
	object-fit: contain;
	object-position: center;
`;

const BoxContainer = styled.div`
	display: flex;
`;

const TextContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	text-align: center;
	align-items: center;
	justify-content: center;
	font-size: 1.3rem;
	font-weight: bold;
	letter-spacing: 0.08rem;
	@media only screen and (max-width: 735px) {
		font-size: 1.1rem;
	}
`;
const BoxButton = styled.button`
	color: white;
	position: relative;
	outline: none;
	border: none;
	border-radius: 1rem;
	padding: 0.4rem;
	font-size: 1.2rem;
	font-weight: bold;
	width: 70%;
	height: 40%;
	background-color: #efa34b;
	text-align: left;
	cursor: pointer;
	display: flex;
	align-items: center;
	transition: all ease 0.4s;
	&:hover {
		background-color: #efa24bc4;
	}
	@media only screen and (max-width: 735px) {
		font-size: 1rem;
	}
`;
const Symbol = styled.span`
	position: absolute;
	font-size: 3rem;
	bottom: 0.5rem;
	right: 0;
	height: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SiteOptions: FC = () => {
	const navigate = useNavigate();
	const handleAnimalIdioms = (): void => {
		navigate('/Animal-idioms');
	};
	const handleColorIdioms = (): void => {
		navigate('/Color-idioms');
	};
	const handleBodyIdioms = (): void => {
		navigate('/Body-idioms');
	};
	const handleClickPlacement = (): void => {
		navigate('/Placement-test');
	};

	return (
		<Container>
			<BoxContainer>
				<SiteOptionEl>
					<ClickableBox>
						<Logo src={monitor1} />
					</ClickableBox>
				</SiteOptionEl>
				<TextContainer>
					Test Your English Level.
					<BoxButton onClick={handleClickPlacement}>
						Placement Test
						<Symbol>
							<MdArrowRightAlt />
						</Symbol>
					</BoxButton>
				</TextContainer>
			</BoxContainer>
			<BoxContainer>
				<SiteOptionEl>
					<ClickableBox>
						<Logo src={monitor2} />
					</ClickableBox>
				</SiteOptionEl>
				<TextContainer>
					Have Fun With Animal Idioms.
					<BoxButton onClick={handleAnimalIdioms}>
						Animal
						<br /> Idioms
						<Symbol>
							<MdArrowRightAlt />
						</Symbol>
					</BoxButton>
				</TextContainer>
			</BoxContainer>
			<BoxContainer>
				<SiteOptionEl>
					<ClickableBox>
						<Logo src={monitor2} />
					</ClickableBox>
				</SiteOptionEl>
				<TextContainer>
					Have Fun With Color Idioms.
					<BoxButton onClick={handleColorIdioms}>
						Color
						<br /> Idioms
						<Symbol>
							<MdArrowRightAlt />
						</Symbol>
					</BoxButton>
				</TextContainer>
			</BoxContainer>
			<BoxContainer>
				<SiteOptionEl>
					<ClickableBox>
						<Logo src={monitor2} />
					</ClickableBox>
				</SiteOptionEl>
				<TextContainer>
					Have Fun With Body Idioms.
					<BoxButton onClick={handleBodyIdioms}>
						Body
						<br /> Idioms
						<Symbol>
							<MdArrowRightAlt />
						</Symbol>
					</BoxButton>
				</TextContainer>
			</BoxContainer>
		</Container>
	);
};

export default SiteOptions;
