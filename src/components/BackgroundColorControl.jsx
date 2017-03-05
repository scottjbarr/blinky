import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import _ from 'lodash'
import { backgroundColorOnChange } from '../actions/index'

class BackgroundColorControl extends Component {
  backgroundColorOnChange(event) {
    this.props.backgroundColorOnChange(event)
  }

  renderRadios() {
    return _.map(this.props.values, (text, value) => {
      return (
        <div className="form-check form-check-inline" key={value}>
          <label className="form-check-label">
            <input className="form-check-input"
                   type="radio"
                   name='background-color'
                   checked={this.props.color === value}
                   onChange={this.props.backgroundColorOnChange.bind(this)}
                   value={value} /> {text}
          </label>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="row">
        <label>Background</label>
        {this.renderRadios()}
      </div>
    )
  }
}

function mapPropsToState(state) {
  return {
    color: state.background.color,
    values: {green: 'Green', red: 'Red'}
  }
}

function mapPropsToDispatch(dispatch) {
  return bindActionCreators({backgroundColorOnChange}, dispatch)
}

export default connect(mapPropsToState, mapPropsToDispatch)(BackgroundColorControl)
