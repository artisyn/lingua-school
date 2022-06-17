import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TiThMenu } from 'react-icons/ti';
import { VscMenu } from 'react-icons/vsc';
import { GiHamburgerMenu } from 'react-icons/gi';

interface MobileMenuInterface {
	setOpen: () => void;
	open: boolean;
}

interface BurgerInterface {
	open: boolean;
}

const Container = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
`;
const BurgerContainer = styled.div<BurgerInterface>`
	z-index: 101;
	cursor: pointer;
	padding: 0.5rem;
	color: white;
	border-radius: 50%;
	font-size: 3rem;
	font-weight: bold;
	display: flex;
	align-items: center;
	&:hover {
		color: #e3e0e0;
		background-color: #00000022;
		box-shadow: 0px 2px 10px 0px #00000022;
	}
	background-color: ${(props) => (props.open ? '#00000022' : '')};
`;

const MobileMenu: FC<MobileMenuInterface> = ({ setOpen, open }) => {
	const handleClick = (): void => {
		setOpen();
	};
	return (
		<Container>
			<BurgerContainer open={open}>
				<GiHamburgerMenu onClick={handleClick} />
			</BurgerContainer>
		</Container>
	);
};

export default MobileMenu;
