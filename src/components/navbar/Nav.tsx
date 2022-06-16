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
interface ContainerInterface {
	show: boolean;
}

const Container = styled.div<ContainerInterface>`
	position: ${(props) => (props.show ? 'sticky' : '')};
	top: 0;
	background-color: #fe9e3f;
	z-index: 100;
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
	z-index: 20;
	display: flex;
	align-items: center;
	gap: 1rem;
	///////////////////
	@media only screen and (max-width: 800px) {
		display: none;
	}
`;

const ThemeContainer = styled.div`
	z-index: 20;
	display: flex;

	align-items: center;
`;
const ThemeText = styled.div`
	z-index: 20;
	font-size: 1rem;
	font-weight: bold;
	width: 6rem;
	color: ${(props) => (props.theme === 'light' ? 'white' : 'black')};
`;
const LogoText = styled.div`
	z-index: 20;
	font-size: 1.4rem;
	font-weight: bold;
	letter-spacing: 0.07rem;
	color: white;
`;

const Nav: FC<NavProps> = () => {
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 400) setShow(true);
			if (window.scrollY < 400) setShow(false);
		});

		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);
	const theme = useSelector((state: RootState) => state.theme.value);
	const page = useSelector((state: RootState) => state.page.value);
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
	const handleTestsClose = (): void => {
		setTestsOpen(false);
	};

	const handleQuizzesClick = (): void => {
		setQuizzesOpen(!quizzesOpen);
		setTestsOpen(false);
	};
	const handleQuizzesClose = (): void => {
		setQuizzesOpen(false);
	};

	return (
		<Container show={show}>
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
					close={handleTestsClose}
				>
					<NavLink
						link={'/Placement-test'}
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
					close={handleQuizzesClose}
				>
					<NavLink
						link={'/Animal-idioms'}
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
