import React, { Component } from 'react'
import LoadingBar from 'react-redux-loading-bar'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <LoadingBar />
        </header>
        <section>
          <LoadingBar scope="sectionBar" />
        </section>
      </div>
    )
  }
}
