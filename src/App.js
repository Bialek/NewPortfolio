import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import { Page, MainContent } from './Styled/Styles';


class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <Nav />
          <MainContent>
            <Route exact path='/' component={Home} />
            <Route path='/skills' component={Skills} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
          </MainContent>
        </Page>
      </Router>
    );
  }
}

export default App;