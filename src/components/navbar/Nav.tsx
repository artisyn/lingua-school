import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import styled from 'styled-components';
import { themeChange } from '../../features/theme/themeSlice';
import ThemeToggle, { BackgroundColors, IconColors } from './ThemeToggle';
import { CircleColors } from './ThemeToggle';
import { MdArrowRightAlt } from 'react-icons/md';

import NavLink from './NavLink';
import DropDown from './DropDown';

interface NavProps {}

const Container = styled.div`
	background: linear-gradient(
		to right,
		#fe9e3f,
		#ffac46,
		#ffba4f,
		#ffc85a,
		#ffd566
	);
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	height: 5rem;
`;
const LinksContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const ThemeContainer = styled.div`
	display: flex;

	align-items: center;
`;
const ThemeText = styled.div`
	font-size: 1rem;
	font-weight: bold;
	width: 6rem;
	color: ${(props) => (props.theme === 'light' ? 'white' : 'black')};
`;
const LogoText = styled.div`
	font-size: 1.4rem;
	font-weight: bold;
	letter-spacing: 0.07rem;
	color: white;
`;

const Nav: FC<NavProps> = () => {
	const theme = useSelector((state: RootState) => state.theme.value);
	const dispatch = useDispatch();

	const [testsOpen, setTestsOpen] = useState<boolean>(false);
	const [quizzesOpen, setQuizzesOpen] = useState<boolean>(false);

	const clickHandle = (): void => {
		dispatch(themeChange());
	};
	const handleTestsClick = (): void => {
		setTestsOpen(!testsOpen);
		setQuizzesOpen(false);
	};
	const handleQuizzesClick = (): void => {
		setQuizzesOpen(!quizzesOpen);
		setTestsOpen(false);
	};

	useEffect(() => {
		document.addEventListener('click', (e) => {
			console.log(e);
		});
	}, []);

	// close on click .......

	return (
		<Container>
			<LogoText>Lingua Plus.</LogoText>
			<LinksContainer>
				<NavLink link={'/Home'} customcolor="white" customfont="1.2rem">
					HOME
				</NavLink>
				<NavLink
					link={'/Guide'}
					customcolor="white"
					customfont="1.2rem"
				>
					GUIDE
				</NavLink>
				<DropDown
					buttonText="TESTS"
					open={testsOpen}
					handleClick={handleTestsClick}
				>
					<NavLink
						link={'/Home'}
						customcolor="white"
						customfont="1rem"
					>
						Placement Test
						<MdArrowRightAlt style={{ fontSize: '1.5rem' }} />
					</NavLink>
				</DropDown>
				<DropDown
					buttonText="QUIZZES"
					open={quizzesOpen}
					handleClick={handleQuizzesClick}
				>
					<NavLink
						link={'/Home'}
						customcolor="white"
						customfont="1rem"
					>
						Animal Idioms
						<MdArrowRightAlt style={{ fontSize: '1.5rem' }} />
					</NavLink>
				</DropDown>
			</LinksContainer>

			<ThemeContainer>
				<ThemeText theme={theme}>
					{theme === 'light' ? 'Light Mode' : 'Dark Mode'}
				</ThemeText>
				<ThemeToggle
					clickHandle={clickHandle}
					circleColor={
						theme === 'dark'
							? CircleColors.dark
							: CircleColors.light
					}
					backgroundColor={
						theme === 'dark'
							? BackgroundColors.dark
							: BackgroundColors.light
					}
					iconColor={
						theme === 'dark' ? IconColors.dark : IconColors.light
					}
					theme={theme}
				/>
			</ThemeContainer>
		</Container>
	);
};

export default Nav;
