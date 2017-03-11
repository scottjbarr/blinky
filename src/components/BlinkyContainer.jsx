import React, { Component } from 'react'
import { connect } from 'react-redux'
import ControlsContainer from './ControlsContainer'
import Blinky from './Blinky'

class BlinkyContainer extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = this.props.background.color
  }

  componentWillReceiveProps(props) {
    document.body.style.backgroundColor = props.background.color
  }

  render() {
    return (
      <div className="App">
        <ControlsContainer />
        <Blinky />
      </div>
    )
  }
}

function mapPropsToState({background}) {
  return {background}
}

export default connect(mapPropsToState, null)(BlinkyContainer)
