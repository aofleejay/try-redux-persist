import React, { Component } from 'react'
import { connect } from 'react-redux'
import locale from '../locale'

class Content extends Component {
  componentDidMount() {
    locale.setLanguage(this.props.language)
    this.setState({})
  }

  componentWillReceiveProps(nextProps) {
    locale.setLanguage(nextProps.language)
  }

  render() {
    return (
      <div>
        <h1>{locale.greeting}</h1>
        <p>{locale.first}</p>
        <p>{locale.second}</p>
        <p>{locale.third}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ language }) => ({ language })

export default connect(mapStateToProps)(Content)
