import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

import { Page, PageBackground, MainContent } from './Styled/App';


class App extends Component {
  render() {
    return (
      <Router>
        <Page>
          <PageBackground src={process.env.PUBLIC_URL + "/images/background1.gif"} alt="background" />
          <Nav />
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