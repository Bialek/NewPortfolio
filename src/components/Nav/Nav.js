import React, { Component } from 'react'

import { PrimaryHeader, SecondaryHeader } from '../../Styled/Styles'
import {
  NavWrapper,
  NavControl,
  NavList,
  NavItem,
  NavLink,
  NavLogo,
  NavText,
  NavContact,
  NavIcon,
} from './Nav.style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Nav extends Component {
  constructor() {
    super()
    this.state = {
      menuOpen: false,
    }
  }

  onClickHandler = () => {
    this.state.menuOpen
      ? this.setState({ menuOpen: false })
      : this.setState({ menuOpen: true })
  }

  render() {
    return (
      <NavWrapper menuOpen={this.state.menuOpen}>
        <NavControl
          menuOpen={this.state.menuOpen}
          onClick={this.onClickHandler}>
          <span />
          <span />
          <span />
        </NavControl>

        <NavLogo menuOpen={this.state.menuOpen}>
          <PrimaryHeader>Białek Rafał</PrimaryHeader>
          <SecondaryHeader>Front-end Developer</SecondaryHeader>
        </NavLogo>

        <NavList>
          <NavItem>
            <NavLink onClick={() => this.props.goToPage(0)}>
              <NavText menuOpen={this.state.menuOpen}>Strona Domowa</NavText>
              <FontAwesomeIcon icon="home" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => this.props.goToPage(1)}>
              <NavText menuOpen={this.state.menuOpen}>Umiejetności</NavText>
              <FontAwesomeIcon icon="chart-bar" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => this.props.goToPage(2)}>
              <NavText menuOpen={this.state.menuOpen}>Projekty</NavText>
              <FontAwesomeIcon icon="file-code" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => this.props.goToPage(3)}>
              <NavText menuOpen={this.state.menuOpen}>Realizacje</NavText>
              <FontAwesomeIcon icon="laptop-code" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={() => this.props.goToPage(4)}>
              <NavText menuOpen={this.state.menuOpen}>Kontakt</NavText>
              <FontAwesomeIcon icon={['fab', 'wpforms']} />
            </NavLink>
          </NavItem>
        </NavList>
        <NavContact menuOpen={this.state.menuOpen}>
          <NavIcon href="tel:607846422">
            <FontAwesomeIcon icon="mobile-alt" />
          </NavIcon>
          <NavIcon href="mailto:contact@bialekrafal.pl">
            <FontAwesomeIcon icon="envelope" />
          </NavIcon>
          <NavIcon href="https://github.com/Bialek" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </NavIcon>
          <NavIcon
            href="https://www.linkedin.com/in/rafał-białek/"
            target="_blank">
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </NavIcon>
        </NavContact>
      </NavWrapper>
    )
  }
}

export default Nav
