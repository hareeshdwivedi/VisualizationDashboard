import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
   display: flex;
   width: 100%;
   flex-direction: column;
   align-items: center;
   margin-top: 30px;
   font-size: 16px;
   position: relative;
   
   &.nav-link__active {
      color: ${props => props.theme.color.textHover};
      & span {
         color: ${props => props.theme.color.textHover};
      }
      &::after {
         content: '';
         width: 5px;
         top: -10px;
         bottom: 0px;
         background-color: ${props => props.theme.color.textHover};
         position: absolute;
         right: 0;
         transition: ${props => props.theme.transition};
      }
   }
   
   &:hover {
      text-decoration: none;
      & svg {
         color: ${props => props.theme.color.textHover};
      }
      & span {
         color: ${props => props.theme.color.textHover};
         
      }
      &::after {
         background-color: ${props => props.theme.color.textHover};
      }
   }

   & span {
      transition: ${props => props.theme.transition};
   }

   & svg {
      font-size: 30px;
      transition: ${props => props.theme.transition};
   }
`;

const VerticalNavLink = props => {
	return (
		<StyledLink to={props.path} exact activeClassName="nav-link__active">
			{props.icon}
			<span>{props.name}</span>
		</StyledLink>
	);
};

export default VerticalNavLink;
