import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavLinkProps {
	link: string;
	children?: React.ReactNode;
	customcolor?: string;
	customfont?: string;
}

interface ContInterface {
	customcolor?: string;
	customfont?: string;
}

const Container = styled(Link)<ContInterface>`
	text-decoration: none;
	outline: none;
	color: ${(props) => props.customcolor};
	font-size: ${(props) => props.customfont};
	font-weight: bold;
	transition: color ease 0.3s;
	&:hover {
		color: #ffffff7f;
	}
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;

const NavLink: FC<NavLinkProps> = ({
	link,
	customcolor,
	customfont,
	children,
}) => {
	return (
		<Container customcolor={customcolor} customfont={customfont} to={link}>
			{children}
		</Container>
	);
};

export default NavLink;
