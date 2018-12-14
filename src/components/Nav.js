import React, { Component } from 'react';

import { PrimaryHeader } from '../Styled/Styles';
import { NavWrapper, NavControl, NavList, NavItem,  NavLink, NavLogo, NavText, NavImg, NavContact, NavIcon } from '../Styled/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Nav extends Component {
    constructor() {
        super();
        this.state = {
            open: true,
        }
    }

    onClickHandler = () => {
        this.state.open ? this.setState({open: false}) : this.setState({open: true}) ;
    }

    render() {
        return (
            <NavWrapper open={this.state.open}>
                <NavControl open={this.state.open} onClick={this.onClickHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavControl>
                
                <NavLogo open={this.state.open}>
                    <PrimaryHeader>Białek Rafał</PrimaryHeader>
                    <NavImg src={process.env.PUBLIC_URL + "/images/me.jpg"} alt="myPhoto"/>
                </NavLogo>

                <NavList>
                    <NavItem>
                        <NavLink to="/">
                            <FontAwesomeIcon icon="home" />
                            <NavText open={this.state.open}>Strona Domowa</NavText>
                    </NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink to="/skills">
                            <FontAwesomeIcon icon="chart-bar" />
                            <NavText open={this.state.open}>Umiejetności</NavText>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/portfolio">
                            <FontAwesomeIcon icon="laptop-code" />
                            <NavText open={this.state.open}>Projekty</NavText>
                        </NavLink>
                    </NavItem>
                </NavList>
                <NavContact open={this.state.open}>
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
