import React, { Component } from 'react';

import { PrimaryHeader, SecondaryHeader } from '../Styled/Styles';
import { NavWrapper, NavControl, NavList, NavItem,  NavLink, NavLogo, NavText, NavContact, NavIcon } from '../Styled/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Nav extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: true,
        }
    }

    onClickHandler = () => {
        this.state.menuOpen ? this.setState({menuOpen: false}) : this.setState({menuOpen: true}) ;
    }

    render() {
        return (
            <NavWrapper menuOpen={this.state.menuOpen}>
                <NavControl menuOpen={this.state.menuOpen} onClick={this.onClickHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </NavControl>

                <NavLogo menuOpen={this.state.menuOpen}>
                    <PrimaryHeader>Białek Rafał</PrimaryHeader>
                    <SecondaryHeader>Front-end Developer</SecondaryHeader>
                </NavLogo>
                
                <NavList>
                    <NavItem>
                        <NavLink to='/'>
                            <FontAwesomeIcon icon='home' />
                            <NavText menuOpen={this.state.menuOpen}>Strona Domowa</NavText>
                    </NavLink> 
                    </NavItem>
                    <NavItem>
                        <NavLink to='/skills'>
                            <FontAwesomeIcon icon='chart-bar' />
                            <NavText menuOpen={this.state.menuOpen}>Umiejetności</NavText>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/portfolio'>
                            <FontAwesomeIcon icon='laptop-code' />
                            <NavText menuOpen={this.state.menuOpen}>Projekty</NavText>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/contact'>
                            <FontAwesomeIcon icon={['fab', 'wpforms']} />
                            <NavText menuOpen={this.state.menuOpen}>Kontakt</NavText>
                        </NavLink>
                    </NavItem>
                </NavList>
                <NavContact menuOpen={this.state.menuOpen}>
                    <NavIcon href='tel:607846422'>
                        <FontAwesomeIcon icon='mobile-alt'/>
                    </NavIcon>
                    <NavIcon href='mailto:bialekrafal94@gmail.com'>
                        <FontAwesomeIcon icon='envelope'/>
                    </NavIcon>
                    <NavIcon href='https://github.com/Bialek' target='_blank'>
                        <FontAwesomeIcon icon={['fab','github']}/>
                    </NavIcon>
                    <NavIcon href='https://www.linkedin.com/in/rafał-białek/' target='_blank'>
                        <FontAwesomeIcon icon={['fab','linkedin-in']}/>
                    </NavIcon>
                </NavContact>
            </NavWrapper>
        );
    }
}

export default Nav;
