import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import Skills from './Skills';
import Portfolio from './Portfolio';

import { Nav, NavList, NavItem,  NavLink, NavLogo, NavImg, NavContact, NavIcon } from './Styled/Nav';
import { Page, PageBackground, MainContent, PrimaryHeader } from './Styled/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <PageBackground src={process.env.PUBLIC_URL + "/images/background1.gif"} alt="background" />
          <Nav>
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
                Home
              </NavLink> 
              </NavItem>
              <NavItem>
                <NavLink to="/skills">
                  <FontAwesomeIcon icon="chart-bar" />
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/portfolio">
                  <FontAwesomeIcon icon="laptop-code" />
                  Projects
                </NavLink>
              </NavItem>
            </NavList>
            <NavList>
              <NavItem>
                <NavLink to="/cv">CV</NavLink> 
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
          </Nav>

          <MainContent>
            <Route exact path="/" component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/portfolio" component={Portfolio} />
          </MainContent>

        </Page>
      </Router>
    );
  }
}

export default App;