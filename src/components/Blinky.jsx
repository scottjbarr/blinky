import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { messageInputOnChange } from '../actions/index'

class Blinky extends Component {
  render() {
    return (
      <div className="blinky">
        {this.props.text}
      </div>
    )
  }
}

function mapPropsToState({message}) {
  const {text} = message
  return {text}
}

export default connect(mapPropsToState, null)(Blinky)
