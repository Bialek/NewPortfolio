import React, { Component } from 'react'
import PageScroller from './components/PageScroller'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Works from './components/Works/Works'

import { Page, MainContent, Stars, ShotingStars } from './Styled/Styles'

class App extends Component {
  render() {
    return (
      <Page>
        <Nav />
        <PageScroller
          ref={c => (this._pageScroller = c)}
          pageOnChange={this.pageOnChange}>
          <Home />
          <Skills />
          <Projects />
          <Works />
          <Contact />
        </PageScroller>
      </Page>
    )
  }
}

export default App

{
  /* <Stars starSize='1px' starNumber='100' />
          <Stars starSize='2px' starNumber='50' />
          <Stars starSize='3px' starNumber='25' />
          <ShotingStars /> */
}
