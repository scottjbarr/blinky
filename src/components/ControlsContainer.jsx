import React, { Component } from 'react'
import { connect } from 'react-redux'
import MessageInput from './MessageInput'
import BackgroundColorControl from './BackgroundColorControl'
import ToggleVisibiltyButton from './ToggleVisibiltyButton'

class ControlsContainer extends Component {
  getDisplay() {
    return this.props.visible === true ? 'block' : 'none'
  }

  render() {
    return (
      <div>
        <div ref="controls" style={{display: this.getDisplay()}}>
          <MessageInput />
          <BackgroundColorControl />
        </div>
        <ToggleVisibiltyButton />
      </div>
    );
  }
}

function mapPropsToState(state) {
  console.log(state.controls)

  return {
    visible: state.controls.visible
  }
}

export default connect(mapPropsToState, null)(ControlsContainer)
