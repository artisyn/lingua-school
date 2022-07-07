import React, { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface NavLinkProps {
	link: string;
	children?: React.ReactNode;
	customcolor?: string;
	customfont?: string;
	customminw?: number;
}

interface ContInterface {
	customcolor?: string;
	customfont?: string;
	customminw?: number;
}

const Container = styled(Link)<ContInterface>`
	min-width: ${(props) => props.customminw + 'rem'};
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
	justify-content: space-between;
	gap: 1rem;
`;

const NavLink: FC<NavLinkProps> = ({
	link,
	customcolor,
	customfont,
	children,
	customminw,
}) => {
	return (
		<Container
			customminw={customminw}
			customcolor={customcolor}
			customfont={customfont}
			to={link}
		>
			{children}
		</Container>
	);
};

export default NavLink;
