import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';

export enum CircleColors {
	dark = '#f9e4c2',
	light = '#f9e4c2',
}
export enum IconColors {
	dark = 'yellow',
	light = 'gold',
}
export enum BackgroundColors {
	dark = 'linear-gradient(to right, #0c143b, #0f1742, #131a49, #171c51, #1b1f58);',
	light = 'linear-gradient(to right, #f9e4c2, #e9caae, #d7b19d, #c3998d, #ae827f);',
}

interface ThemeToggleProps {
	circleColor: CircleColors;
	backgroundColor: BackgroundColors;
	iconColor: IconColors;
	clickHandle: () => void;
	theme: string;
}

const Container = styled.div`
	padding: 0.3rem;
	display: flex;
	align-items: center;
	position: relative;
	border-radius: 1rem;
	width: 5rem;
	height: 2.2rem;
	cursor: pointer;
	background: ${(props) => props.color};
	transition: all ease-in-out 0.4s;
`;

const Circle = styled.div`
	transition: all ease-in-out 0.4s;
	position: absolute;
	left: 0;
	border-radius: 50%;
	width: 2rem;
	height: 2rem;
	background-color: ${(props) => props.color};
	transform: ${(props) =>
		props.theme === 'light' ? '' : 'translateX(3rem)'};
`;
const Night = styled.span`
	position: absolute;
	left: 0;
	color: ${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.3rem;
	opacity: ${(props) => (props.theme === 'dark' ? '1' : '0')};
`;

const Light = styled.span`
	position: absolute;
	right: 0;
	color: ${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.3rem;
	opacity: ${(props) => (props.theme === 'dark' ? '0' : '1')};
`;

const ThemeToggle: FC<ThemeToggleProps> = ({
	circleColor,
	backgroundColor,
	iconColor,
	clickHandle,
	theme,
}) => {
	const handleClick = () => {
		clickHandle();
	};
	return (
		<Container onClick={handleClick} color={backgroundColor}>
			<Night color={iconColor} theme={theme}>
				<MdDarkMode />
			</Night>
			<Circle theme={theme} color={circleColor}></Circle>

			<Light color={iconColor} theme={theme}>
				<MdLightMode />
			</Light>
		</Container>
	);
};

export default ThemeToggle;
