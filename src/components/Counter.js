import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/counter'

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.decrease}>-</button>
        {this.props.counter}
        <button onClick={this.props.increase}>+</button>
      </div>
    )
  }
}

const mapStateToProps = ({ counter }) => ({ counter })

export default connect(
  mapStateToProps,
  { increase, decrease },
)(Counter)
