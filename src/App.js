import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Works from './components/Works/Works';

import { Page, MainContent, Stars, ShotingStars } from './Styled/Styles';


class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <Stars starSize='1px' starNumber='100' />
          <Stars starSize='2px' starNumber='50' />
          <Stars starSize='3px' starNumber='25' />
          <ShotingStars />
          <Nav />
          <MainContent>
            <Route exact path='/' component={Home} />
            <Route path='/skills' component={Skills} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/works' component={Works} />
            <Route path='/contact' component={Contact} />
          </MainContent>
        </Page>
      </Router>
    );
  }
}

export default App;