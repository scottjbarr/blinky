import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { blinkyLoad } from '../actions/index'
import querystring from 'urlite/querystring'

class Blinky extends Component {
  componentDidMount() {
    const query = querystring.parse(window.location.search)
    this.props.blinkyLoad(decodeURIComponent(query.text), query.color)
  }

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

export default connect(mapPropsToState, {blinkyLoad})(Blinky)
