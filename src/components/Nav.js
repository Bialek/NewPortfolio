import React, { Component } from 'react';

import { PrimaryHeader } from '../Styled/App';
import { NavWrapper, NavControl, NavList, NavItem,  NavLink, NavLogo, NavImg, NavContact, NavIcon } from '../Styled/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Nav extends Component {
    render() {
        return (
            <NavWrapper>
                <NavControl>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </NavControl>
                <NavLink to="/">
                <NavLogo>
                    <PrimaryHeader>Białek Rafał</PrimaryHeader>
                    <NavImg src={process.env.PUBLIC_URL + "/images/me.jpg"} alt="myPhoto"/>
                </NavLogo>
                </NavLink>
                <NavList>
                <NavItem>
                    <NavLink to="/">
                    <FontAwesomeIcon icon="home" />
                    Strona Domowa
                </NavLink> 
                </NavItem>
                <NavItem>
                    <NavLink to="/skills">
                    <FontAwesomeIcon icon="chart-bar" />
                    Umiejetności
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/portfolio">
                    <FontAwesomeIcon icon="laptop-code" />
                    Projekty
                    </NavLink>
                </NavItem>
                </NavList>
                <NavList>
                <NavItem>
                    <NavLink to="/cv">
                    <FontAwesomeIcon icon ="file-pdf" />
                    CV
                    </NavLink> 
                </NavItem>
                </NavList>
                <NavContact>
                <NavIcon href="tel:607846422">
                    <FontAwesomeIcon icon="mobile-alt"/>
                </NavIcon>
                <NavIcon href="mailto:bialekrafal94@gmail.com">
                    <FontAwesomeIcon icon="envelope"/>
                </NavIcon>
                <NavIcon href="https://github.com/Bialek" target="_blank">
                    <FontAwesomeIcon icon={["fab","github"]}/>
                </NavIcon>
                <NavIcon href="https://www.linkedin.com/in/rafał-białek/" target="_blank">
                    <FontAwesomeIcon icon={["fab","linkedin-in"]}/>
                </NavIcon>
                </NavContact>
            </NavWrapper>
        );
    }
}

export default Nav;
