import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLanguage } from '../actions/language'
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <button className="button" onClick={() => this.props.setLanguage('th')}>TH</button>
        <button className="button" onClick={() => this.props.setLanguage('en')}>EN</button>
      </div>
    )
  }
}

export default connect(
  null,
  { setLanguage },
)(Navbar)
