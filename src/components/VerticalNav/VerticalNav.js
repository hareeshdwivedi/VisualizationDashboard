import React from 'react';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { GiMineTruck, GiCargoCrane } from 'react-icons/gi';
import { FaRegMap, FaRoad } from 'react-icons/fa';
import { GoGraph } from 'react-icons/go';

import VerticalNavLink from './VerticalNavLink';

const StyledVerticalNav = styled.aside`
	height: calc(100vh - 60px);
	line-height: 3em;
	width: 150px;
	background-color: ${({ theme }) => theme.color.bgCard};
`;

const links = [
	{ name: 'Productivity', path: '/', icon: <GoGraph /> },
	{ name: 'Bunching', path: '/bunching', icon: <FaRegMap /> },
	{ name: 'Loading', path: '/loading', icon: <GiCargoCrane /> },
	{ name: 'Dumping', path: '/dumping', icon: <GiMineTruck /> },
	{ name: 'Roads', path: '/roads', icon: <FaRoad /> }
	// { name: 'Map', path: '/map', icon: <FaRegMap /> },
	// { name: 'Add', path: '/add', icon: <IoIosAddCircleOutline /> }
];

const VerticalNav = () => {
	return (
		<StyledVerticalNav>
			<Nav defaultActiveKey="/" className="flex-column">
				{links.map(link => (
					<VerticalNavLink
						key={link.name}
						path={link.path}
						name={link.name}
						icon={link.icon}
					/>
				))}
			</Nav>
		</StyledVerticalNav>
	);
};

export default VerticalNav;
