import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineDown } from 'react-icons/ai';

interface DropDownInterface {
	buttonText: string;
	children?: React.ReactNode;
	open: boolean;
	handleClick: () => void;
}
interface ChildrenInterface {
	open: boolean;
}
interface LinkProps {
	open?: boolean;
}

const Container = styled.div`
	position: relative;

	display: flex;
	align-items: center;
`;
const Button = styled.div`
	cursor: pointer;
	outline: none;
	border: none;
	background-color: inherit;
	color: white;
	font-size: 1.2rem;
	font-weight: bold;
	transition: color ease 0.3s;
	&:hover {
		color: #ffffff7f;
	}
	display: flex;
	align-items: center;
`;
const ChildrenContainer = styled.div<ChildrenInterface>`
	position: absolute;
	width: max-content;
	border-radius: 0.4rem;
	padding: 1rem;
	background-color: #8080808b;
	bottom: -5rem;
	display: ${(props) => (props.open ? 'flex' : 'none')};
	align-items: left;
	flex-direction: column;
	justify-content: flex-start;
`;

const LinkIcon = styled.span<LinkProps>`
	display: flex;
	align-items: center;
	transition: all ease 0.4s;
	transform: ${(props) => (props.open ? 'rotate(180deg)' : '')};
`;
const DropDown: FC<DropDownInterface> = ({
	buttonText,
	children,
	open,
	handleClick,
}) => {
	return (
		<Container>
			<Button onClick={handleClick}>
				{buttonText}
				<LinkIcon open={open}>
					<AiOutlineDown />
				</LinkIcon>
			</Button>
			<ChildrenContainer open={open}>{children}</ChildrenContainer>
		</Container>
	);
};

export default DropDown;
