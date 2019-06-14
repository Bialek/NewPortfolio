import React, { Component } from 'react'
import PageScroller from './components/PageScroller'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Background from './components/Background/Background'

import DB from './DB'

import { Page } from './Styled/Styles'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { currentPage: 1 }
    this._pageScroller = null
  }

  goToPage = eventKey => {
    this._pageScroller.goToPage(eventKey)
  }

  pageOnChange = number => {
    this.setState({ currentPage: number })
  }

  render() {
    return (
      <Page>
        <Background />
        <Nav activePage={this.state.currentPage} goToPage={this.goToPage} />
        <PageScroller
          ref={c => (this._pageScroller = c)}
          pageOnChange={this.pageOnChange}>
          <Home />
          <Skills />
          <Projects props={DB.projects} />
          <Contact />
        </PageScroller>
      </Page>
    )
  }
}

export default App
