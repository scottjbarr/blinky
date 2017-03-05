import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { controlsToggleVisibility } from '../actions/index'

class ToggleVisibiltyButton extends Component {
  getButtonText() {
    return this.props.visible ? 'Hide Controls' : 'Show Controls'
  }

  render() {
    return (
      <div className='row'>
        <a className='btn btn-secondary'
           onClick={this.props.controlsToggleVisibility.bind(this)}>
          {this.getButtonText()}</a>
      </div>
    )
  }
}

function mapPropsToState(state) {
  return {visible: state.controls.visible}
}

function mapPropsToDispatch(dispatch) {
  return bindActionCreators({controlsToggleVisibility}, dispatch)
}

export default connect(mapPropsToState, mapPropsToDispatch)(ToggleVisibiltyButton)
