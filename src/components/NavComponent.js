import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FiLogOut } from 'react-icons/fi';
import { GiMineWagon } from 'react-icons/gi';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
	position: fixed; 
	height: 60px; 
	width: 100%; 
	background: ${props => props.theme.color.text};
`;

const NavLink = styled(Link)`
	color: ${props => props.theme.color.bg};
	text-decoration: none;
	
	&:hover {
		color: ${props => props.theme.color.bgHover};
		transition: ${props => props.theme.transition};
		text-decoration: none;
	}

	&.nav__brand {
		font-size: 20px;

		& svg {
			font-size: 30px;
		}
	}
`;

const NavComponent = () => {
	return (
		<StyledNavbar>
			<NavLink to="/" className="nav__brand">
				<GiMineWagon /> V O L T
			</NavLink>
			<Nav className="ml-auto">
				<NavLink to="#">
					<FiLogOut /> Log Out
				</NavLink>
			</Nav>
		</StyledNavbar>
	);
};

export default NavComponent;
