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
import MobileMenu from './MobileMenu';

interface NavProps {}
interface ContainerInterface {
	show: boolean;
}
interface MobileInterface {
	open: boolean;
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
	@media only screen and (max-width: 800px) {
		display: none;
	}
	z-index: 20;
	font-size: 1rem;
	font-weight: bold;
	width: 6rem;
	color: ${(props) => (props.theme === 'light' ? 'white' : 'black')};
`;
const LogoText = styled.div`
	min-width: 9rem;
	z-index: 20;
	font-size: 1.4rem;
	font-weight: bold;
	letter-spacing: 0.07rem;
	color: white;
`;

const MobileContainer = styled.div`
	display: none;
	width: 100%;
	@media only screen and (max-width: 800px) {
		display: flex;
	}
`;
const MobileNavContainer = styled.div<MobileInterface>`
	padding-top: 2rem;
	z-index: 100;
	position: absolute;
	top: 5rem;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
	display: ${(props) => (props.open ? '' : 'none')};
	height: ${(props) => (props.open ? '100vh' : '0')};
	width: ${(props) => (props.open ? '100%' : '0')};

	background-color: #000000a8;

	@media only screen and (min-width: 800px) {
		display: none;
	}
`;
const MobileSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const MobileItem = styled.div``;
const SectionTitle = styled.h3`
	color: white;
	font-size: 1.2rem;
`;
const SectionItem = styled.div`
	border: 1px solid orange;
	border-radius: 5px;
	padding: 0.3rem;
	margin-left: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Nav: FC<NavProps> = () => {
	const [show, setShow] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

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
	const handleOpen = (): void => {
		setOpen(!open);
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
			<MobileContainer>
				<MobileMenu open={open} setOpen={handleOpen}></MobileMenu>
			</MobileContainer>
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
			<MobileNavContainer open={open}>
				<MobileItem
					onClick={() => {
						setOpen(!open);
					}}
				>
					<NavLink
						link={'/Home'}
						customcolor="white"
						customfont="1.2rem"
					>
						HOME
					</NavLink>
				</MobileItem>
				<MobileItem
					onClick={() => {
						setOpen(!open);
					}}
				>
					<NavLink
						link={'/Guide'}
						customcolor="white"
						customfont="1.2rem"
					>
						GUIDE
					</NavLink>
				</MobileItem>
				<MobileSection>
					<SectionTitle>Tests:</SectionTitle>
					<SectionItem
						onClick={() => {
							setOpen(!open);
						}}
					>
						<NavLink
							link={'/Placement-test'}
							customcolor="white"
							customfont="1rem"
						>
							Placement Test
							<MdArrowRightAlt style={{ fontSize: '1.5rem' }} />
						</NavLink>
					</SectionItem>
				</MobileSection>
				<MobileSection>
					<SectionTitle>Quizzes:</SectionTitle>
					<SectionItem
						onClick={() => {
							setOpen(!open);
						}}
					>
						<NavLink
							link={'/Animal-idioms'}
							customcolor="white"
							customfont="1rem"
						>
							Animal Idioms
							<MdArrowRightAlt style={{ fontSize: '1.5rem' }} />
						</NavLink>
					</SectionItem>
				</MobileSection>
			</MobileNavContainer>
		</Container>
	);
};

export default Nav;
