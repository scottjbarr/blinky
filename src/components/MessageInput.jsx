import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { messageInputOnChange } from '../actions/index'

class MessageInput extends Component {
  componentDidMount() {
    this.refs.input.select()
  }

  messageInputOnChange(event) {
    this.props.messageInputOnChange(event)
  }

  render() {
    return (
      <div className="form-group row">
        <label htmlFor="example-text-input" className="col-2 col-form-label">Text</label>
        <div className="col-10">
          <input className="form-control"
                 type="text"
                 value={this.props.text}
                 id="example-text-input"
                 ref="input"
                 placeholder="Yell a blinky message"
                 onChange={this.messageInputOnChange.bind(this)} />
        </div>
      </div>
    )
  }
}

function mapPropsToState({message}) {
  const {text} = message
  return {text}
}

function mapPropsToDispatch(dispatch) {
  return bindActionCreators({messageInputOnChange}, dispatch)
}

export default connect(mapPropsToState, mapPropsToDispatch)(MessageInput)
