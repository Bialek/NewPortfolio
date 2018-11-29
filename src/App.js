import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './Home';
import Skills from './Skills';
import Portfolio from './Portfolio';
import { Page, Nav, NavList, NavItem, MainPage, NavLink } from './Styled/App';

class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Nav>
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

          <MainPage>
            <Route exact path="/" component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/portfolio" component={Portfolio} />
          </MainPage>

        </Page>
      </Router>
    );
  }
}

export default App;