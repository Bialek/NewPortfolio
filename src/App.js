import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import Skills from './Skills';
import Portfolio from './Portfolio';
import { Page, PageBackground, Nav, NavList, NavItem, MainContent, NavLink, NavLogo, NavImg, NavHeader } from './Styled/App';


class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <PageBackground src={process.env.PUBLIC_URL + '/images/background.jpg'} />
          <Nav>
            <NavLink to="/">
              <NavLogo>
                <NavHeader>Białek Rafał</NavHeader>
                <NavImg src={process.env.PUBLIC_URL + '/images/me.jpg'} />
              </NavLogo>
            </NavLink>
            <NavList>
              <NavItem>
                <NavLink to="/">Home</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink to="/skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </NavItem>
            </NavList>
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